import React, { useEffect, useState } from "react";
import "../assets/css/gallery.css";

import gallery1 from "../assets/images/gallery/gallery1.jpeg";
import gallery2 from "../assets/images/gallery/gallery2.jpeg";
import gallery3 from "../assets/images/gallery/gallery3.jpeg";
import gallery4 from "../assets/images/gallery/gallery4.jpeg";
import gallery5 from "../assets/images/gallery/gallery5.jpeg";
import gallery6 from "../assets/images/gallery/gallery6.jpeg";
import gallery7 from "../assets/images/gallery/gallery7.jpeg";
import gallery8 from "../assets/images/gallery/gallery8.jpeg";
// import gallery9 from "../assets/images/gallery/gallery9.jpeg";
// import gallery10 from "../assets/images/gallery/gallery10.jpeg";
// import gallery1 from "../assets/images/team/team1.png";
// import gallery2 from "../assets/images/team/team2.png";
// import gallery3 from "../assets/images/team/team3.png";
// import gallery4 from "../assets/images/team/team4.png";
// import gallery5 from "../assets/images/team/team5.png";
// import gallery6 from "../assets/images/team/team1.png";
// import gallery7 from "../assets/images/team/team1.png";
// import gallery8 from "../assets/images/team/team1.png";
// import gallery9 from "../assets/images/team/team1.png";
// import gallery10 from "../assets/images/team/team1.png";

const Gallery = () => {
  

    const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    // gallery9,
    // gallery10,
  ];



  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    const next = (currentIndex + 1) % images.length;
    setCurrentIndex(next);
    setSelectedImage(images[next]);
  };

  const prevImage = () => {
    const prev = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prev);
    setSelectedImage(images[prev]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;

      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex]);

  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX;

    if (touchStartX - touchEndX > 50) {
      nextImage();
    }

    if (touchEndX - touchStartX > 50) {
      prevImage();
    }
  };


  return (
    <>
      <section className="gallery-section py-5 bg-premium-dark mt-5">
        <div className="container">

          <div className="text-center mb-5">
            {/* <h2 className="display-5 fw-bold gold-text">
              Our Gallery
            </h2> */}
            <h1 className="fw-bold">Our <span className="gold-text">Gallery</span></h1>

            <p className="text-white-50">
              Explore memorable moments with Clasy Carz
            </p>

            <div className="gold-border mx-auto"></div>
          </div>

          <div className="gallery-grid">
            {images.map((img, index) => (
              <div
                className="gallery-card"
                key={index}
                onClick={() => openModal(index)}
              >
                <img
                  src={img}
                  alt={`gallery-${index}`}
                  className="gallery-img"
                />

                <div className="gallery-overlay">
                  <i className="bi bi-search"></i>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {selectedImage && (
        <div
          className="gallery-modal"
          onClick={closeModal}
        >

          <button
            className="gallery-btn prev-btn"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <i className="bi bi-chevron-left"></i>
          </button>

          <div
            className="gallery-modal-content"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={selectedImage}
              alt="Preview"
              className="gallery-modal-img"
            />
          </div>

          <button
            className="gallery-btn next-btn"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <i className="bi bi-chevron-right"></i>
          </button>

          <button
            className="gallery-close"
            onClick={closeModal}
          >
            <i className="bi bi-x-lg"></i>
          </button>

        </div>
      )}
      </>
  );
};

export default Gallery;