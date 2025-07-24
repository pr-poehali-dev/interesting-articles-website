import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Все');
  const [comments, setComments] = useState([
    { id: 1, author: 'Анна Петрова', text: 'Отличная статья! Очень полезная информация.', time: '2 часа назад' },
    { id: 2, author: 'Михаил К.', text: 'Согласен с автором. Добавлю в закладки.', time: '4 часа назад' }
  ]);
  const [newComment, setNewComment] = useState('');

  const articles = [
    {
      id: 1,
      title: 'Тренды веб-дизайна 2024',
      excerpt: 'Разбираем самые актуальные тенденции современного дизайна и их практическое применение.',
      category: 'Дизайн',
      readTime: '5 мин',
      image: '/img/3e2143be-f9db-4a8a-a159-7b079164e2e9.jpg'
    },
    {
      id: 2,
      title: 'React vs Vue: сравнение фреймворков',
      excerpt: 'Подробное сравнение популярных JavaScript фреймворков с примерами кода.',
      category: 'Разработка',
      readTime: '8 мин',
      image: '/img/3e2143be-f9db-4a8a-a159-7b079164e2e9.jpg'
    },
    {
      id: 3,
      title: 'UX/UI принципы для начинающих',
      excerpt: 'Основные принципы создания удобных и красивых пользовательских интерфейсов.',
      category: 'UX/UI',
      readTime: '6 мин',
      image: '/img/3e2143be-f9db-4a8a-a159-7b079164e2e9.jpg'
    },
    {
      id: 4,
      title: 'Основы SEO продвижения',
      excerpt: 'Практические советы по поисковой оптимизации для начинающих веб-мастеров.',
      category: 'Маркетинг',
      readTime: '7 мин',
      image: '/img/3e2143be-f9db-4a8a-a159-7b079164e2e9.jpg'
    },
    {
      id: 5,
      title: 'Адаптивная верстка: лучшие практики',
      excerpt: 'Современные подходы к созданию отзывчивых веб-интерфейсов.',
      category: 'Разработка',
      readTime: '6 мин',
      image: '/img/3e2143be-f9db-4a8a-a159-7b079164e2e9.jpg'
    },
    {
      id: 6,
      title: 'Цветовая психология в дизайне',
      excerpt: 'Как правильно использовать цвета для создания эмоциональной связи с пользователем.',
      category: 'Дизайн',
      readTime: '4 мин',
      image: '/img/3e2143be-f9db-4a8a-a159-7b079164e2e9.jpg'
    }
  ];

  const categories = ['Все', 'Дизайн', 'Разработка', 'UX/UI', 'Маркетинг'];

  // Фильтрация статей по активной категории
  const filteredArticles = activeCategory === 'Все' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  const addComment = () => {
    if (newComment.trim()) {
      setComments([...comments, {
        id: comments.length + 1,
        author: 'Гость',
        text: newComment,
        time: 'только что'
      }]);
      setNewComment('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-lg flex items-center justify-center">
                <Icon name="BookOpen" size={20} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent">
                ModernBlog
              </h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-[#FF6B6B] transition-colors font-medium">Главная</a>
              <a href="#articles" className="text-gray-700 hover:text-[#FF6B6B] transition-colors font-medium">Статьи</a>
              <a href="#categories" className="text-gray-700 hover:text-[#FF6B6B] transition-colors font-medium">Категории</a>
              <a href="#about" className="text-gray-700 hover:text-[#FF6B6B] transition-colors font-medium">О блоге</a>
              <a href="#contacts" className="text-gray-700 hover:text-[#FF6B6B] transition-colors font-medium">Контакты</a>
            </nav>

            <Button variant="outline" size="sm" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#45B7D1] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent animate-fade-in">
            Интересные статьи
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
            Открывайте новые знания, делитесь идеями и обсуждайте актуальные темы с нашим сообществом
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto mb-12 animate-scale-in">
            <div className="relative">
              <Input
                placeholder="Поиск статей..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-lg border-2 border-gray-200 focus:border-[#4ECDC4]"
              />
              <Icon name="Search" size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8">Категории</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 text-sm font-medium cursor-pointer transition-all hover-scale ${
                  activeCategory === category 
                    ? 'bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white' 
                    : 'hover:bg-[#4ECDC4] hover:text-white border-gray-300'
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section id="articles" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-bold">
              {activeCategory === 'Все' ? 'Последние статьи' : `Статьи: ${activeCategory}`}
            </h3>
            <div className="text-sm text-gray-500">
              Найдено: {filteredArticles.length} статей
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, index) => (
                <Card key={article.id} className="overflow-hidden hover-scale transition-all duration-300 border-0 shadow-lg hover:shadow-xl animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <Badge className="absolute top-4 left-4 bg-[#FF6B6B] text-white">
                    {article.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-800 line-clamp-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Icon name="Clock" size={16} className="mr-1" />
                      {article.readTime}
                    </div>
                    <Button variant="outline" size="sm" className="hover:bg-[#4ECDC4] hover:text-white">
                      Читать
                    </Button>
                  </div>
                </CardContent>
              </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="FileText" size={24} className="text-gray-400" />
                </div>
                <h4 className="text-lg font-semibold text-gray-600 mb-2">Статьи не найдены</h4>
                <p className="text-gray-500">В категории "{activeCategory}" пока нет статей</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-3xl font-bold text-center mb-12">Обсуждение</h3>
          
          {/* Add Comment */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-lg">Оставить комментарий</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Textarea
                  placeholder="Поделитесь своими мыслями..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="min-h-[100px]"
                />
                <Button 
                  onClick={addComment}
                  className="bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white hover:opacity-90"
                >
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Comments List */}
          <div className="space-y-4">
            {comments.map((comment) => (
              <Card key={comment.id} className="animate-fade-in">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#4ECDC4] to-[#45B7D1] rounded-full flex items-center justify-center">
                      <Icon name="User" size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-semibold text-gray-800">{comment.author}</h4>
                        <span className="text-sm text-gray-500">{comment.time}</span>
                      </div>
                      <p className="text-gray-700">{comment.text}</p>
                      <div className="flex items-center space-x-4 mt-3">
                        <Button variant="ghost" size="sm" className="text-gray-500 hover:text-[#FF6B6B]">
                          <Icon name="Heart" size={16} className="mr-1" />
                          Нравится
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-500 hover:text-[#4ECDC4]">
                          <Icon name="MessageCircle" size={16} className="mr-1" />
                          Ответить
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">О блоге</h3>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              Наш блог — это пространство для обмена знаниями и идеями в области современных технологий, 
              дизайна и разработки. Мы создаем контент, который вдохновляет и помогает расти профессионально.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={24} className="text-white" />
                </div>
                <h4 className="font-semibold mb-2">Сообщество</h4>
                <p className="text-gray-600">Активное комьюнити разработчиков и дизайнеров</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#4ECDC4] to-[#45B7D1] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="BookOpen" size={24} className="text-white" />
                </div>
                <h4 className="font-semibold mb-2">Качественный контент</h4>
                <p className="text-gray-600">Проверенная информация от экспертов индустрии</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#45B7D1] to-[#FFEAAD] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Lightbulb" size={24} className="text-white" />
                </div>
                <h4 className="font-semibold mb-2">Инновации</h4>
                <p className="text-gray-600">Следим за трендами и делимся новыми решениями</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Контакты</h3>
          <div className="max-w-md mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-2">
                    <Icon name="Mail" size={20} className="text-[#4ECDC4]" />
                    <span>blog@example.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Icon name="Phone" size={20} className="text-[#4ECDC4]" />
                    <span>+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex justify-center space-x-4 pt-4">
                    <Button variant="outline" size="sm" className="hover:bg-[#4ECDC4] hover:text-white">
                      <Icon name="Twitter" size={16} />
                    </Button>
                    <Button variant="outline" size="sm" className="hover:bg-[#FF6B6B] hover:text-white">
                      <Icon name="Instagram" size={16} />
                    </Button>
                    <Button variant="outline" size="sm" className="hover:bg-[#45B7D1] hover:text-white">
                      <Icon name="Linkedin" size={16} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-lg flex items-center justify-center">
              <Icon name="BookOpen" size={20} className="text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent">
              ModernBlog
            </h1>
          </div>
          <p className="text-gray-400">© 2024 ModernBlog. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;