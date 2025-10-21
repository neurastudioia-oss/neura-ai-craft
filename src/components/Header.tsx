import logo from "@/assets/neura-studio-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img 
              src={logo} 
              alt="Neura Studio Logo" 
              className="h-10 sm:h-12 w-auto"
            />
          </a>
          
          <nav className="hidden md:flex items-center gap-6">
            <a 
              href="#packages" 
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Pacotes
            </a>
            <a 
              href="#portfolio" 
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Portfolio
            </a>
            <a 
              href="#contact" 
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Contato
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
