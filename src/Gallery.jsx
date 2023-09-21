import React, { useRef, useState, useCallback, useEffect } from "react";
import { useDrag, useDrop } from "react-dnd";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";

import galleryList from "./photo.jsx";

const Card = ({ src, title, id, index, moveImage, tag }) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: "image",
    hover: (item, monitor) => {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveImage(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "image",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging(),
      };
    },
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <div
      ref={ref}
      style={{ opacity }}
      className=" shadow relative border mb-8 md:mb-5 "
    >
      <img src={src} alt={title} className="h-[320px] w-[320px] " />
      <p className="absolute top-1 text-xs rounded-[12px] bg-[#F3F4F680] px-2 py-[3px] text-[#111827] font-bold">
        {tag}
      </p>
    </div>
  );
};

const SkeletonCard = () => {
  return (
    <div className="shadow relative border mb-5 animate-pulse">
      <div className="h-[240px] w-[240px] bg-gray-300"></div>
      <div className="absolute top-1 bg-gray-300 h-5 w-20 rounded-[12px]"></div>
    </div>
  );
};

const Gallery = ({ searchQuery }) => {
  const [images, setImages] = useState(galleryList);
  const [filteredImages, setFilteredImages] = useState(images);
  const [isLoading, setIsLoading] = useState(true);

  const moveImage = useCallback((dragIndex, hoverIndex) => {
    setImages((prevCards) => {
      const clonedCards = [...prevCards];
      const removedItem = clonedCards.splice(dragIndex, 1)[0];

      clonedCards.splice(hoverIndex, 0, removedItem);
      return clonedCards;
    });
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredImages(images);
    } else {
      const filtered = images.filter((image) =>
        image.tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredImages(filtered);
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, [searchQuery, images]);

  return (
    <>
      <DndProvider backend={TouchBackend}>
        <main className="pb-[80px] pt-[40px]">
          <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 mt-5 ">
            {isLoading
              ? // Render skeleton cards when isLoading is true
                Array(4)
                  .fill()
                  .map((_, index) => <SkeletonCard key={index} />)
              : // Render actual cards when isLoading is false
                React.Children.toArray(
                  filteredImages.map((image, index) => (
                    <Card
                      src={image.img}
                      title={image.title}
                      id={image.id}
                      index={index}
                      moveImage={moveImage}
                      tag={image.tag}
                    />
                  ))
                )}
          </div>
        </main>
      </DndProvider>
    </>
  );
};

export default Gallery;
