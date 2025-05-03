
import React from 'react';
import { Badge, BookOpen } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Header = () => {
  return (
    <header className="py-8 md:py-12 bg-gradient-to-r from-brand-blue/10 to-brand-purple/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-6 mb-6 md:mb-0">
            <Avatar className="h-24 w-24 border-4 border-brand-purple/20">
              <AvatarImage 
                src="/lovable-uploads/a2c014c3-a4a4-44ef-852d-202291a196ae.png" 
                alt="Abdikhafar Issack"
                className="object-cover" 
              />
              <AvatarFallback className="text-lg font-medium">AI</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-purple">
                Abdikhafar Issack
              </h1>
              <p className="text-gray-600 mt-1">Software Engineer & Cyber Security Analyst</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex gap-2">
              <span className="bg-brand-soft-blue px-3 py-1 rounded-full text-sm font-medium text-gray-700 flex items-center">
                <Badge className="h-4 w-4 mr-1 text-brand-blue" />
                <span>18 Certifications</span>
              </span>
              <span className="bg-brand-soft-pink px-3 py-1 rounded-full text-sm font-medium text-gray-700">Professional</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
