module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx,vue}',
    './public/index.html', 
  ],
  theme: {
    extend: {
      backgroundImage: {
        'unique': "url('/image/bg-image.jpg')",
        'lady_image': "url('/image/lady_image.jpg')",
        'lady_image1': "url('/image/lady_image1.jpg')",
        'lady_image2': "url('/image/carousel-2.jpg')",
        'testimonial': "url('/image/testimonial.jpg')",
        'lay_image3': "url('/image/portfolio-3.jpg')",
        'lay_image4': "url('/image/blog-2.jpg')",
        'lay_image5': "url('/image/portfolio-4.jpg')",
        'carousel_3': "url('/image/carousel-3.jpg')",
      }
    },
  },
  plugins: [],
}