import { useState } from 'react'
import './App.css'
import { food } from './products.ts'

type Food = {
  name: string
  desc: string
  src: string
  id: number
}

const productos: Food[] = []

function App() {
  const [product, setProduct] = useState<Food[]>([])

function MapItem({ fo }: { fo: Food }) {
  // verificamos si el producto ya está en la lista global
  const isSelected = product.some(p => p.id === fo.id)

  function handleFood(f: Food) {
    if (!isSelected) {
      // agregar
      productos.push(f)
      setProduct([...productos])
    } else {
      // quitar
      const index = productos.findIndex(p => p.id === f.id)
      if (index !== -1) {
        productos.splice(index, 1)
        setProduct([...productos])
      }
    }
  }

  return (
    <article
      className={`food-item ${isSelected ? "selected" : ""}`}
      onClick={() => handleFood(fo)}
    >
      <img src={fo.src} alt={fo.name} />
      <span>
        <strong>{fo.name}</strong>
        <p className="p-food-item">{fo.desc}</p>
      </span>
      {isSelected && <div className="check-overlay">✔</div>}
    </article>
  )
}


  return (
    <>
      <nav>
        <span className="img-logo-nav"><img src="https://raw.githubusercontent.com/Fr4ny3r/restaurant1example/refs/heads/master/src/assets/logo.webp" alt="Owner Logo" width="50px" /></span>
        <div>
          <a>
            <span>Home</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-home"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
          </a>
          <a>
            <span>Menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-salad"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 11h16a1 1 0 0 1 1 1v.5c0 1.5 -2.517 5.573 -4 6.5v1a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-1c-1.687 -1.054 -4 -5 -4 -6.5v-.5a1 1 0 0 1 1 -1z" /><path d="M18.5 11c.351 -1.017 .426 -2.236 .5 -3.714v-1.286h-2.256c-2.83 0 -4.616 .804 -5.64 2.076" /><path d="M5.255 11.008a12.204 12.204 0 0 1 -.255 -2.008v-1h1.755c.98 0 1.801 .124 2.479 .35" /><path d="M8 8l1 -4l4 2.5" /><path d="M13 11v-.5a2.5 2.5 0 1 0 -5 0v.5" /></svg>
          </a>
          <a>
            <span>Orders</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-receipt"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2" /></svg>
          </a>
          <a>
            <span>Contact</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
          </a>
        </div>
      </nav>

      <header id="header">
        <img src="https://img.freepik.com/foto-gratis/interior-restaurante_1127-3394.jpg" alt="image food"/>
        <div>
          <h1>Welcome to Rest-Scent</h1>
          <p><i>“Unique flavors, unforgettable moments”.</i></p>
        </div>
      </header>

      <section id="sample" className="menu-slider">
        <div className="slider" aria-label="Galería de platos, desplaza continuo">
          <div className="slider__track">
            <div className="slide"><img src="https://raw.githubusercontent.com/Fr4ny3r/restaurant1example/refs/heads/master/src/image1.webp" alt="Rosca Angelical"/></div>
            <div className="slide"><img src="https://raw.githubusercontent.com/Fr4ny3r/restaurant1example/refs/heads/master/src/image2.webp" alt="Trucha con Manzanas y Avellanas Tostadas"/></div>
            <div className="slide"><img src="https://raw.githubusercontent.com/Fr4ny3r/restaurant1example/refs/heads/master/src/image3.webp" alt="Tofu y Verduras Sofritos"/></div>
            <div className="slide"><img src="https://raw.githubusercontent.com/Fr4ny3r/restaurant1example/refs/heads/master/src/image4.webp" alt="Pollo al Ron"/></div>
            <div className="slide"><img src="https://raw.githubusercontent.com/Fr4ny3r/restaurant1example/refs/heads/master/src/image5.webp" alt="Pierogi de Papa"/></div>
            <div className="slide"><img src="https://raw.githubusercontent.com/Fr4ny3r/restaurant1example/refs/heads/master/src/image1.webp" alt="" aria-hidden="true"/></div>
            <div className="slide"><img src="https://raw.githubusercontent.com/Fr4ny3r/restaurant1example/refs/heads/master/src/image2.webp" alt="" aria-hidden="true"/></div>
            <div className="slide"><img src="https://raw.githubusercontent.com/Fr4ny3r/restaurant1example/refs/heads/master/src/image3.webp" alt="" aria-hidden="true"/></div>
            <div className="slide"><img src="https://raw.githubusercontent.com/Fr4ny3r/restaurant1example/refs/heads/master/src/image4.webp" alt="" aria-hidden="true"/></div>
            <div className="slide"><img src="https://raw.githubusercontent.com/Fr4ny3r/restaurant1example/refs/heads/master/src/image5.webp" alt="" aria-hidden="true"/></div>
          </div>
        </div>
      </section>

      <main id="about">
        <div>
          <h1>About</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>    
        </div>
        <img src="https://raw.githubusercontent.com/Fr4ny3r/restaurant1example/refs/heads/master/src/assets/logo.webp" alt="Logo"/>
      </main>

      <section id="sign">
        <h1>Menu / Food</h1>
      </section>

      <main id="food">
        {food.length > 0 ? (
          food.map((f) => (
            <MapItem key={f.id} fo={f}/>
          ))
        ) : (
          <span style={{color: "#222", fontSize : "20px"}}>Cargando...</span>
        )}
      </main>

      <section id="sign">
        <h1>Orders</h1>
      </section>

      <main id="orders">
        <div className="order-select">
          <h2>Tu selección</h2>
          {product.length > 0 ? (
            <ul className="order-list">
              {product.map(p => (
                <li key={p.id}>
                  <img src={p.src} alt={p.name} />
                  <span>{p.name}</span>
                  <button
                  className="remove-btn"
                  onClick={() => {
                    // Eliminar del array product
                    const updated = product.filter(item => item.id !== p.id)
                    setProduct(updated)

                    // También eliminar de la lista global productos
                    const index = productos.findIndex(item => item.id === p.id)
                    if (index !== -1) {
                      productos.splice(index, 1)
                    }
                  }}
                >
                  ✕
          </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="order-empty">No hay productos seleccionados</p>
          )}
        </div>

        <form className="order-form">
          <label htmlFor="order-name">Nombre completo:</label>
          <input type="text" id="order-name" name="order-name" required/>

          <label htmlFor="order-phone">Teléfono:</label>
          <input type="tel" id="order-phone" name="order-phone" required/>

          <label htmlFor="order-items">Pedido:</label>
          <textarea id="order-items" name="order-items" placeholder="Ejemplo: 2x Rosca Angelical, 1x Pollo al Ron" required></textarea>

          <label htmlFor="order-address">Dirección de entrega:</label>
          <textarea id="order-address" name="order-address" required></textarea>

          <button type="submit">Enviar Pedido</button>
        </form>
      </main>
  <section id="sign">
          <h1>Contacto</h1>
        </section>

        <main id="contact">
          <form className="contact-form">
            <label htmlFor="contact-name">Nombre:</label>
            <input type="text" id="contact-name" name="contact-name" required />

            <label htmlFor="contact-email">Email:</label>
            <input type="email" id="contact-email" name="contact-email" required />

            <label htmlFor="contact-message">Mensaje:</label>
            <textarea id="contact-message" name="contact-message" rows={5} required></textarea>

            <button type="submit">Enviar</button>
          </form>
        </main>
      <footer>
        <p>© 2025 Rest-Scent – All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
