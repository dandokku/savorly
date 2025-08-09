# **Savorly Restaurant Website**

A **modern, responsive restaurant website** built with **React, Tailwind CSS, and Framer Motion** for smooth animations. Features include online reservations, menu filtering, gallery, testimonials, and more.

## **Live Demo**

[View Demo](#https://sayvorly.netlify.app/)

## **Features**

* Fully Responsive – Works on mobile, tablet & desktop
* Interactive Menu – Filter by categories & dietary needs
* Reservation System – Date/time picker with real-time availability
* Gallery – Lightbox-enabled image grid
* Testimonials – Customer reviews with star ratings
* SEO Optimized – Clean markup & semantic HTML
* Scroll-to-Top – Floating button for better UX
* Animations – Smooth transitions with Framer Motion

---

## **Tech Stack**

* **Frontend:** React, Tailwind CSS
* **Animations:** Framer Motion
* **Icons:** React Icons
* **Deployment:** Netlify

---

## **Project Structure**

```bash
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx        # Responsive navigation
│   ├── Footer.jsx        # Contact & social links
│   ├── ScrollToTopButton.jsx   # Floating back-to-top button
│
├── pages/               # Page components
│   ├── Home.jsx          # Hero, USP, testimonials
│   ├── Menu.jsx          # Filterable food/drinks menu
│   ├── About.jsx         # Story, team, chef spotlight
│   ├── Contact.jsx       # Form, map, hours
│   └── ...
│
├── App.jsx               # Main router
└── main.jsx             # React entry point
```

---

## **Setup & Installation**

1. **Clone the repo**

   ```bash
   git clone https://github.com/your-username/savorly-restaurant.git
   cd savorly-restaurant
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run locally**

   ```bash
   npm start
   # or
   yarn start
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**

   ```bash
   npm run build
   ```

---

## **Customization**

### 1. Update Content

* Replace placeholder text in `pages/` and `components/`
* Add your own images in `assets/`

### 2. Change Colors

Modify `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#D97706", // Amber-600
        secondary: "#92400E", // Amber-800
      },
    },
  },
};
```

### 3. Connect APIs

* **Reservations:** Replace with OpenTable or Calendly embed
* **Contact Form:** Use Formspree or Netlify Forms

---

## **Deployment**

### Vercel

[Deploy with Vercel](https://vercel.com/new)

### Netlify

[Deploy with Netlify](https://app.netlify.com/start)

## **Contact**

* **Email:** [your-email@example.com](mailto:jesulobadaniel1@gmail.com)

---

**Built for performance, style, and ease of customization.**

