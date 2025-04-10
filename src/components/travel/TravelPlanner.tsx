
import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

const timeToMinutes = (time: string): number => {
  const [hoursStr, minutesStr = '0'] = time.split(':');
  const hours = parseInt(hoursStr, 10);
  const minutes = parseInt(minutesStr, 10);
  return hours * 60 + minutes;
};

const TravelPlanner = () => {
  const [activities, setActivities] = useState<{ id: number; name: string; location: string; duration: number; cost: number; time: string; }[]>([]);
  const [newActivity, setNewActivity] = useState({ name: '', location: '', duration: 60, cost: 0, time: '09:00' });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<number | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editActivity, setEditActivity] = useState<{ id: number; name: string; location: string; duration: number; cost: number; time: string; } | null>(null);
  const nextId = useRef(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewActivity(prev => ({ ...prev, [name]: value }));
  };

  const handleAddActivity = () => {
    if (!newActivity.name || !newActivity.location) {
      toast.error('Por favor, completa el nombre y la ubicación de la actividad.');
      return;
    }

    const duration = parseInt(newActivity.duration.toString(), 10);
    const cost = parseFloat(newActivity.cost.toString());

    if (isNaN(duration) || isNaN(cost)) {
      toast.error('Duración y costo deben ser valores numéricos.');
      return;
    }

    const newActivityWithId = {
      id: nextId.current++,
      ...newActivity,
      duration,
      cost,
    };

    setActivities(prev => [...prev, newActivityWithId]);
    setNewActivity({ name: '', location: '', duration: 60, cost: 0, time: '09:00' });
    setIsDialogOpen(false);
    toast.success('Actividad agregada con éxito!');
  };

  const handleDeleteActivity = (id: number) => {
    setActivities(activities.filter(activity => activity.id !== id));
    toast.success('Actividad eliminada con éxito!');
  };

  const handleEditClick = (id: number) => {
    const activityToEdit = activities.find(activity => activity.id === id);
    if (activityToEdit) {
      setEditActivity({ ...activityToEdit });
      setIsEditModalOpen(true);
    }
  };

  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditActivity(prev => {
      if (prev) {
        return { ...prev, [name]: value };
      }
      return prev;
    });
  };

  const handleUpdateActivity = () => {
    if (!editActivity) return;

    if (!editActivity.name || !editActivity.location) {
      toast.error('Por favor, completa el nombre y la ubicación de la actividad.');
      return;
    }

    const duration = parseInt(editActivity.duration.toString(), 10);
    const cost = parseFloat(editActivity.cost.toString());

    if (isNaN(duration) || isNaN(cost)) {
      toast.error('Duración y costo deben ser valores numéricos.');
      return;
    }

    setActivities(activities.map(activity =>
      activity.id === editActivity.id ? { ...editActivity, duration, cost } : activity
    ));
    setIsEditModalOpen(false);
    setEditActivity(null);
    toast.success('Actividad actualizada con éxito!');
  };

  const calculateTotalCost = () => {
    return activities.reduce((sum, activity) => sum + activity.cost, 0);
  };

  const calculateTotalDuration = () => {
    return activities.reduce((sum, activity) => sum + activity.duration, 0);
  };

  const formatTime = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
  };

  const calculateTimeline = () => {
    let currentTime = timeToMinutes(activities[0]?.time || '09:00');
    return activities.map(activity => {
      const startTime = formatTime(currentTime);
      currentTime += activity.duration;
      const endTime = formatTime(currentTime);
      return { ...activity, startTime, endTime };
    });
  };

  const timelineActivities = calculateTimeline();

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Planificador de Viaje</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Button onClick={() => setIsDialogOpen(true)}>Agregar Actividad</Button>
          </div>

          {activities.length === 0 ? (
            <p>No hay actividades planificadas. ¡Comienza a agregar algunas!</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actividad
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ubicación
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Duración
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Costo
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tiempo
                    </th>
                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Inicio
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Fin
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {timelineActivities.map((activity) => (
                    <tr key={activity.id}>
                      <td className="px-6 py-4 whitespace-nowrap">{activity.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{activity.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{activity.duration} minutos</td>
                      <td className="px-6 py-4 whitespace-nowrap">${activity.cost}</td>
                       <td className="px-6 py-4 whitespace-nowrap">{activity.time}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{activity.startTime}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{activity.endTime}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => handleEditClick(activity.id)}
                          className="mr-2"
                        >
                          Editar
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDeleteActivity(activity.id)}
                        >
                          Eliminar
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <Separator className="my-4" />

          <div className="flex justify-between">
            <p className="text-lg font-semibold">Costo Total: ${calculateTotalCost()}</p>
            <p className="text-lg font-semibold">Duración Total: {calculateTotalDuration()} minutos</p>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Agregar Nueva Actividad</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="name" className="text-right">
                Nombre
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={newActivity.name}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="location" className="text-right">
                Ubicación
              </label>
              <Input
                type="text"
                id="location"
                name="location"
                value={newActivity.location}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="duration" className="text-right">
                Duración (minutos)
              </label>
              <Input
                type="number"
                id="duration"
                name="duration"
                value={newActivity.duration}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="cost" className="text-right">
                Costo
              </label>
              <Input
                type="number"
                id="cost"
                name="cost"
                value={newActivity.cost}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
             <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="time" className="text-right">
                Tiempo
              </label>
               <Input
                type="time"
                id="time"
                name="time"
                value={newActivity.time}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" onClick={handleAddActivity}>
              Agregar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editar Actividad</DialogTitle>
          </DialogHeader>
          {editActivity && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="edit-name" className="text-right">
                  Nombre
                </label>
                <Input
                  type="text"
                  id="edit-name"
                  name="name"
                  value={editActivity.name}
                  onChange={handleEditInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="edit-location" className="text-right">
                  Ubicación
                </label>
                <Input
                  type="text"
                  id="edit-location"
                  name="location"
                  value={editActivity.location}
                  onChange={handleEditInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="edit-duration" className="text-right">
                  Duración (minutos)
                </label>
                <Input
                  type="number"
                  id="edit-duration"
                  name="duration"
                  value={editActivity.duration}
                  onChange={handleEditInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="edit-cost" className="text-right">
                  Costo
                </label>
                <Input
                  type="number"
                  id="edit-cost"
                  name="cost"
                  value={editActivity.cost}
                  onChange={handleEditInputChange}
                  className="col-span-3"
                />
              </div>
               <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="edit-time" className="text-right">
                    Tiempo
                  </label>
                  <Input
                    type="time"
                    id="edit-time"
                    name="time"
                    value={editActivity.time}
                    onChange={handleEditInputChange}
                    className="col-span-3"
                  />
                </div>
            </div>
          )}
          <DialogFooter>
            <Button type="button" onClick={handleUpdateActivity}>
              Actualizar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TravelPlanner;
