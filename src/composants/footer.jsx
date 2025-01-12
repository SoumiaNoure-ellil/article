import React from 'react';
import { Instagram, Mail, MessageCircle, CreditCard, Truck, Shield, Gift, Heart, Star, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r back  ">
      <div className="border-b border-x-lime-200 text ">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 py-8 px-4">
          <div className="flex items-center gap-3">
            <CreditCard className="text-gold h-8 w-8" />
            <div>
              <p className="font-semibold">Paiement Sécurisé</p>
              <p className="text-sm text-gray-400">Cryptage 256-bit</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Truck className="text-gold h-8 w-8" />
            <div>
              <p className="font-semibold">Livraison Premium</p>
              <p className="text-sm text-gray-400">Mondial Relay</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="text-gold h-8 w-8" />
            <div>
              <p className="font-semibold">Authenticité</p>
              <p className="text-sm text-gray-400">Produits 100% authentiques</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Gift className="text-gold h-8 w-8" />
            <div>
              <p className="font-semibold">Emballage Cadeau</p>
              <p className="text-sm text-gray-400">Service offert</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 ">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Chic&Click
            </h1>
            <div className="flex items-center gap-2 mt-2 justify-center lg:justify-start">
              <Star className="h-5 w-5 text-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="text-sm text-gray-400 ml-2">Chic&Click</span>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 ">
            <a href="#" className="flex items-center gap-2 hover:text-gray-400 transition-colors group">
              <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform text" />
              <span className="text-lg  text-gray-400">WhatsApp</span>
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-gray-400 transition-colors group ">
              <Instagram className="h-6 w-6 group-hover:scale-110 transition-transform  text" />
              <span className="text-lg  text-gray-400">Instagram</span>
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-gray-400 transition-colors group">
              <Mail className="h-6 w-6 group-hover:scale-110 transition-transform  text" />
              <span className="text-lg  text-gray-400">Email</span>
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-gray-400 transition-colors group">
              <Heart className="h-6 w-6 group-hover:scale-110 transition-transform  text" />
              <span className="text-lg  text-gray-400">Favoris</span>
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-gray-400 transition-colors group">
              <Award className="h-6 w-6 group-hover:scale-110 transition-transform text " />
              <span className="text-lg  text-gray-400">Accès VIP</span>
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}