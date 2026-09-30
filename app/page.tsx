import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Шапка с логотипом и навигацией */}
      <header>
        <div>
          
        </div>

        <nav>
          <Link href="/" style={{ marginRight: '15px' }}>Главная</Link>
          <Link href="/menu" style={{ marginRight: '15px' }}>Меню</Link>
          <Link href="/about" style={{ marginRight: '15px' }}>О нас</Link>
          <Link href="/location">Контакты</Link>
        </nav>
      </header>

      <hr style={{ margin: '20px 0' }} />

      {/* Основной баннер-текст */}
      <section>
        <h1>Добро пожаловать в «Зёрнышко»</h1>
        <p>Свежеобжаренные зёрна и уютная атмосфера.</p>

        <Link href="/menu">
          <button>Смотреть меню</button>
        </Link>
      </section>
    </div>
  );
}
