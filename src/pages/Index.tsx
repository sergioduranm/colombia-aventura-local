
import Hero from "@/components/home/Hero";
import LocalExperts from "@/components/home/LocalExperts";
import Experiences from "@/components/home/Experiences";
import MissionStatement from "@/components/home/MissionStatement";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { MessageSquare, Heart, Share, MapPin, Bell, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // Ejemplos de publicaciones para el feed
  const feedPosts = [
    {
      id: 1,
      author: {
        name: "Carlos Ramírez",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop",
        location: "Medellín, Antioquia"
      },
      content: "Acabo de guiar a un grupo increíble por los senderos del café en el Eje Cafetero. ¡Una experiencia inolvidable conectando con nuestra tierra y cultura!",
      image: "https://images.unsplash.com/photo-1598038990673-77f84dbb94a1?q=80&w=2070&auto=format&fit=crop",
      time: "Hace 2 horas",
      likes: 45,
      comments: 12,
      shares: 5
    },
    {
      id: 2,
      author: {
        name: "Natalia Gómez",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
        location: "Cartagena, Bolívar"
      },
      content: "Hoy compartí la historia del Castillo San Felipe con viajeros de todo el mundo. Descubrimos juntos los secretos de las murallas y la resistencia cartagenera. ¿Quién quiere unirse a la próxima aventura histórica?",
      image: "https://images.unsplash.com/photo-1591971737211-9a9f15341d04?q=80&w=1974&auto=format&fit=crop",
      time: "Hace 5 horas",
      likes: 78,
      comments: 23,
      shares: 8
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <Hero />
        
        {/* Feed Layout - estructura principal */}
        <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar izquierdo */}
          <div className="hidden lg:block lg:col-span-3">
            <Card className="sticky top-20">
              <CardContent className="p-4">
                <nav className="space-y-2 pt-2">
                  <Link to="/my-trip" className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:bg-secondary">
                    <Calendar className="h-5 w-5" />
                    <span className="text-sm font-medium">Mi Viaje</span>
                  </Link>
                  <Link to="/experiences" className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:bg-secondary">
                    <MapPin className="h-5 w-5" />
                    <span className="text-sm font-medium">Experiencias</span>
                  </Link>
                  <Link to="/locals" className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:bg-secondary">
                    <Users className="h-5 w-5" />
                    <span className="text-sm font-medium">Expertos Locales</span>
                  </Link>
                  <Link to="/community" className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:bg-secondary">
                    <MessageSquare className="h-5 w-5" />
                    <span className="text-sm font-medium">Comunidad</span>
                  </Link>
                  <Separator className="my-3" />
                  <h3 className="px-3 text-sm font-medium text-gray-500">Destinos populares</h3>
                  <Link to="/experiences?location=medellin" className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:bg-secondary">
                    <span className="text-sm">Medellín</span>
                  </Link>
                  <Link to="/experiences?location=cartagena" className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:bg-secondary">
                    <span className="text-sm">Cartagena</span>
                  </Link>
                  <Link to="/experiences?location=amazonas" className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:bg-secondary">
                    <span className="text-sm">Amazonas</span>
                  </Link>
                </nav>
              </CardContent>
            </Card>
          </div>
          
          {/* Feed central */}
          <div className="col-span-1 lg:col-span-6 space-y-6">
            {/* Sección de creación de post */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarImage src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288&auto=format&fit=crop" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2 flex-1 text-gray-500 cursor-pointer">
                    ¿Qué lugares de Colombia te gustaría visitar?
                  </div>
                </div>
                <Separator className="mb-4" />
                <div className="flex justify-between">
                  <Button variant="ghost" className="text-primary">
                    <MapPin className="mr-2 h-4 w-4" />
                    Ubicación
                  </Button>
                  <Button variant="ghost" className="text-primary">
                    <Calendar className="mr-2 h-4 w-4" />
                    Eventos
                  </Button>
                  <Button variant="ghost" className="text-primary">
                    <Bell className="mr-2 h-4 w-4" />
                    Notificaciones
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Posts del feed */}
            {feedPosts.map(post => (
              <Card key={post.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-4">
                    <div className="flex items-start gap-3">
                      <Avatar>
                        <AvatarImage src={post.author.avatar} />
                        <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium text-secondary2">{post.author.name}</h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-3.5 w-3.5 mr-1 text-primary" />
                          <span>{post.author.location}</span>
                          <span className="mx-1">•</span>
                          <span>{post.time}</span>
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 text-secondary2">{post.content}</p>
                  </div>
                  
                  {post.image && (
                    <div className="relative">
                      <img 
                        src={post.image} 
                        alt="Publicación" 
                        className="w-full object-cover max-h-[500px]"
                      />
                    </div>
                  )}
                  
                  <div className="p-4">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <div>{post.likes} me gusta</div>
                      <div>{post.comments} comentarios • {post.shares} compartidos</div>
                    </div>
                    <Separator className="mb-3" />
                    <div className="flex justify-between">
                      <Button variant="ghost" className="flex-1 text-gray-600">
                        <Heart className="mr-2 h-4 w-4" />
                        Me gusta
                      </Button>
                      <Button variant="ghost" className="flex-1 text-gray-600">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Comentar
                      </Button>
                      <Button variant="ghost" className="flex-1 text-gray-600">
                        <Share className="mr-2 h-4 w-4" />
                        Compartir
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Secciones de contenido original transformadas como cards en el feed */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="p-4">
                  <h3 className="font-bold text-lg text-primary mb-2">Experiencias destacadas</h3>
                  <p className="text-secondary2">Vive Colombia a través de experiencias únicas diseñadas y guiadas por locales.</p>
                </div>
                <div className="px-4 pb-4">
                  <Experiences />
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="p-4">
                  <h3 className="font-bold text-lg text-primary mb-2">Expertos locales</h3>
                  <p className="text-secondary2">Conecta con colombianos apasionados que compartirán contigo su conocimiento y cultura.</p>
                </div>
                <div className="px-4 pb-4">
                  <LocalExperts />
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Sidebar derecho */}
          <div className="hidden lg:block lg:col-span-3">
            <Card className="sticky top-20">
              <CardContent className="p-4">
                <h3 className="font-medium mb-4 text-secondary2">Próximos eventos</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="bg-primary text-white text-center rounded p-2 w-12">
                      <div className="text-xs">ABR</div>
                      <div className="text-lg font-bold">15</div>
                    </div>
                    <div>
                      <h4 className="font-medium text-secondary2">Festival de la Cultura Cafetera</h4>
                      <p className="text-sm text-gray-600">Quindío, Colombia</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-primary text-white text-center rounded p-2 w-12">
                      <div className="text-xs">MAY</div>
                      <div className="text-lg font-bold">20</div>
                    </div>
                    <div>
                      <h4 className="font-medium text-secondary2">Tour de Avistamiento de Aves</h4>
                      <p className="text-sm text-gray-600">Sierra Nevada, Colombia</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-primary text-white text-center rounded p-2 w-12">
                      <div className="text-xs">JUN</div>
                      <div className="text-lg font-bold">05</div>
                    </div>
                    <div>
                      <h4 className="font-medium text-secondary2">Festival Vallenato</h4>
                      <p className="text-sm text-gray-600">Valledupar, Colombia</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full text-primary">Ver todos los eventos</Button>
                </div>
                
                <Separator className="my-4" />
                
                <h3 className="font-medium mb-4 text-secondary2">Destinos sugeridos</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative rounded-lg overflow-hidden h-24 group">
                    <img src="https://images.unsplash.com/photo-1529715272646-88eea51c9933?q=80&w=2080&auto=format&fit=crop" className="w-full h-full object-cover" alt="Medellín" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2">
                      <span className="text-white font-medium text-sm">Medellín</span>
                    </div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden h-24 group">
                    <img src="https://images.unsplash.com/photo-1545761731-021e45fe1584?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Cartagena" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2">
                      <span className="text-white font-medium text-sm">Cartagena</span>
                    </div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden h-24 group">
                    <img src="https://images.unsplash.com/photo-1593029767435-f740506eb0a2?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Bogotá" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2">
                      <span className="text-white font-medium text-sm">Bogotá</span>
                    </div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden h-24 group">
                    <img src="https://images.unsplash.com/photo-1560252061-bbcc7c448342?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Cali" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2">
                      <span className="text-white font-medium text-sm">Cali</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <MissionStatement />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
