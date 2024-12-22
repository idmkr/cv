import React from 'react';

const projects = [
  { name: 'Notion Redux', desc: 'Управление задачами с использованием Redux', img: '/projects/notion-redux.png', link: 'https://github.com/idmkr/redux' },
  { name: 'Notion', desc: 'Простой инструмент для заметок и задач', img: '/projects/notion.png', link: 'https://github.com/idmkr/notion' },
  { name: 'Api&Spa', desc: 'SPA с использованием API для данных', img: '/projects/api-spa.png', link: 'https://github.com/idmkr/apispa' },
  { name: 'lamoda', desc: 'Копия интернет-магазина', img: '/projects/lamoda.jpg', link: 'https://github.com/idmkr/lamoda' },
  { name: 'todo list', desc: 'Список дел с функциями управления', img: '/projects/todo.jpg', link: 'https://github.com/idmkr/todo2' },
  { name: 'bulls&cows', desc: 'Игра на чистом JS', img: '/projects/bulls-cows.jpg', link: 'https://github.com/idmkr/bulls_cows' },
  { name: 'Галерея', desc: 'Коллекция картин с описаниями', img: '/projects/gallery.jpg', link: 'https://github.com/idmkr/gallery' },
  { name: 'Лендинг', desc: 'Рекламный сайт для продукта', img: '/projects/landing.jpg', link: 'https://github.com/idmkr/lending' },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h2>Портфолио</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <img src={project.img} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.desc}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Посмотреть на GitHub</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Portfolio;
