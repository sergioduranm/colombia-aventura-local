
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users } from "lucide-react";
import { useState } from "react";

type ExperienceBookingProps = {
  price: number;
  currency: string;
  duration: string;
};

// Format price with thousands separators
const formatPrice = (price: number, currency: string) => {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency, maximumFractionDigits: 0 }).format(price);
};

const ExperienceBooking = ({ price, currency, duration }: ExperienceBookingProps) => {
  const [guests, setGuests] = useState(1);
  
  const formatTotal = () => {
    return formatPrice(price * guests, currency);
  };

  return (
    <Card className="sticky top-28">
      <CardContent className="pt-6">
        <div className="mb-6">
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-secondary2">{formatPrice(price, currency)}</span>
            <span className="text-gray-600 ml-1"> / persona</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 mb-6">
          <Button variant="outline" className="flex justify-between h-auto py-3">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span className="font-medium">Reservar fecha</span>
            </div>
            <span className="text-gray-500">→</span>
          </Button>

          <div className="border rounded-md flex items-center justify-between p-3">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span className="font-medium">Invitados</span>
            </div>
            <div className="flex items-center gap-2">
              <button 
                className="w-8 h-8 rounded-full border flex items-center justify-center"
                onClick={() => setGuests(Math.max(1, guests - 1))}
              >
                -
              </button>
              <span className="w-8 text-center">{guests}</span>
              <button 
                className="w-8 h-8 rounded-full border flex items-center justify-center"
                onClick={() => setGuests(guests + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>

        <Button className="w-full mb-4">Reservar</Button>

        <div className="text-center text-sm text-gray-600">
          No se te cobrará todavía
        </div>

        <div className="mt-6 border-t pt-4">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">{formatPrice(price, currency)} × {guests} {guests > 1 ? 'personas' : 'persona'}</span>
            <span>{formatTotal()}</span>
          </div>
          <div className="border-t pt-4 mt-4 flex justify-between font-semibold">
            <span>Total</span>
            <span>{formatTotal()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExperienceBooking;
