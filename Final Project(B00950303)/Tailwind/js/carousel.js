document.addEventListener("alpine:init", () => {
    Alpine.data("imageSlider", () => ({
      currentIndex: 1,
      images: [
        "img/company-logos/company-logo-1.png",
        "img/company-logos/company-logo-2.png",
        "img/company-logos/company-logo-3.png",
        "img/company-logos/company-logo-4.png",
        "img/company-logos/company-logo-5.png",
        "img/company-logos/company-logo-6.png",
      ],
      init() {
        this.currentIndex = 1;
      },
      isVisible(index) {
        return this.currentIndex === index + 1;
      },
      previous() {
        if (this.currentIndex > 1) {
          this.currentIndex = this.currentIndex - 1;
        }
      },
      forward() {
        if (this.currentIndex < this.images.length) {
          this.currentIndex = this.currentIndex + 1;
        }
      },
    }));
  });


