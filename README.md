# **Savorly Restaurant Website**

A **modern, responsive restaurant website** built with **React, Tailwind CSS, and Framer Motion** for smooth animations. Features include online reservations, menu filtering, gallery, testimonials, and more.

## **Live Demo**

[View Demo](#) *(Add your deployment link here)*

## **Features**

* Fully Responsive – Works on mobile, tablet & desktop
* Interactive Menu – Filter by categories & dietary needs
* Reservation System – Date/time picker with real-time availability
* Gallery – Lightbox-enabled image grid
* Testimonials – Customer reviews with star ratings
* SEO Optimized – Clean markup & semantic HTML
* Dark/Light Mode – Optional toggle (see `DarkModeToggle.js`)
* Scroll-to-Top – Floating button for better UX
* Animations – Smooth transitions with Framer Motion

---

## **Tech Stack**

* **Frontend:** React, Tailwind CSS
* **Animations:** Framer Motion
* **Icons:** React Icons
* **Form Handling:** React Hook Form (optional)
* **Deployment:** Vercel / Netlify

---

## **Project Structure**

```bash
src/
├── components/          # Reusable UI components
│   ├── Navbar.js        # Responsive navigation
│   ├── Footer.js        # Contact & social links
│   ├── DishCard.js      # Menu item component
│   ├── ScrollToTop.js   # Floating back-to-top button
│   └── ...
│
├── pages/               # Page components
│   ├── Home.js          # Hero, USP, testimonials
│   ├── Menu.js          # Filterable food/drinks menu
│   ├── About.js         # Story, team, chef spotlight
│   ├── Contact.js       # Form, map, hours
│   └── ...
│
├── assets/              # Images & media
│   ├── dishes/          # Food photos
│   ├── gallery/         # Restaurant ambiance
│   └── team/            # Staff portraits
│
├── App.js               # Main router
└── index.js             # React entry point
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

   Open [http://localhost:3000](http://localhost:3000) in your browser.

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

---

## **License**

MIT © \[Your Name]

---

## **Contact**

* **Email:** [your-email@example.com](mailto:your-email@example.com)
* **GitHub:** [@your-username](https://github.com/your-username)

---

**Built for performance, style, and ease of customization.**

