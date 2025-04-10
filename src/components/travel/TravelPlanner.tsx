
import { useState, useRef } from 'react';
import { Calendar as CalendarIcon, Clock, Plus, X, Edit2, Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface Activity {
  id: number;
  name: string;
  dayId: number;
  startTime: string;
  duration: number;
}

interface Day {
  id: number;
  name: string;
}

const TravelPlanner = () => {
  const [days, setDays] = useState<Day[]>([
    { id: 1, name: 'Día 1' },
    { id: 2, name: 'Día 2' },
    { id: 3, name: 'Día 3' },
  ]);
  
  const [activities, setActivities] = useState<Activity[]>([
    { id: 1, name: 'Visita al museo', dayId: 1, startTime: '09:00', duration: 120 },
    { id: 2, name: 'Almuerzo en restaurante local', dayId: 1, startTime: '13:00', duration: 90 },
    { id: 3, name: 'Tour por la ciudad', dayId: 2, startTime: '10:00', duration: 180 },
    { id: 4, name: 'Cena especial', dayId: 2, startTime: '19:00', duration: 120 },
    { id: 5, name: 'Playa', dayId: 3, startTime: '11:00', duration: 240 },
  ]);

  const [newActivity, setNewActivity] = useState<Activity>({
    id: 0,
    name: '',
    dayId: 1,
    startTime: '09:00',
    duration: 60
  });

  const [draggedActivity, setDraggedActivity] = useState<Activity | null>(null);
  const [isDraggingOver, setIsDraggingOver] = useState<{ dayId: number, time: string } | null>(null);
  const [nextId, setNextId] = useState(6);
  const [editingActivity, setEditingActivity] = useState<Activity | null>(null);

  const hourRefs = useRef<Record<number, Record<string, HTMLDivElement | null>>>({});

  const timeSlots = [];
  for (let i = 6; i < 23; i++) {
    timeSlots.push(`${i.toString().padStart(2, '0')}:00`);
  }

  const handleDragStart = (activity: Activity) => {
    setDraggedActivity(activity);
  };

  const handleDragOver = (e: React.DragEvent, dayId: number, time: string) => {
    e.preventDefault();
    setIsDraggingOver({ dayId, time });
  };

  const handleDrop = (e: React.DragEvent, dayId: number, time: string) => {
    e.preventDefault();
    
    if (!draggedActivity) return;
    
    setActivities(activities.map(act => 
      act.id === draggedActivity.id 
        ? { ...act, dayId, startTime: time } 
        : act
    ));
    
    setDraggedActivity(null);
    setIsDraggingOver(null);
  };

  const addActivity = () => {
    if (!newActivity.name) return;
    
    setActivities([
      ...activities, 
      { ...newActivity, id: nextId }
    ]);
    
    setNextId(nextId + 1);
    setNewActivity({
      id: 0,
      name: '',
      dayId: 1,
      startTime: '09:00',
      duration: 60
    });
  };

  const deleteActivity = (id: number) => {
    setActivities(activities.filter(act => act.id !== id));
  };

  const startEditing = (activity: Activity) => {
    setEditingActivity({...activity});
  };

  const saveEdit = () => {
    if (!editingActivity) return;
    
    setActivities(activities.map(act => 
      act.id === editingActivity.id ? editingActivity : act
    ));
    
    setEditingActivity(null);
  };

  const addDay = () => {
    const newDayId = days.length > 0 ? Math.max(...days.map(d => d.id)) + 1 : 1;
    setDays([...days, { id: newDayId, name: `Día ${newDayId}` }]);
  };

  const removeDay = (dayId: number) => {
    if (days.length <= 1) return;
    setDays(days.filter(day => day.id !== dayId));
    setActivities(activities.filter(act => act.dayId !== dayId));
  };

  const getActivityPosition = (startTime: string) => {
    const [hours] = startTime.split(':');
    return (parseInt(hours) - 6) * 60;
  };

  const getActivityColor = (activity: Activity) => {
    // Base colors for activities using the brand colors
    const colors = [
      'bg-brand-secondary1/30 border-brand-primary',
      'bg-brand-accent/20 border-brand-accent',
      'bg-colombia-yellow/20 border-colombia-yellow',
      'bg-colombia-blue/20 border-colombia-blue',
      'bg-colombia-green/20 border-colombia-green',
    ];
    
    return colors[activity.id % colors.length];
  };

  return (
    <Card className="mb-10">
      <CardHeader>
        <CardTitle className="text-center text-brand-primary">Planificador de Viaje</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Activity Creator */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Nueva Actividad</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              <div className="lg:col-span-2">
                <Input
                  placeholder="Nombre de la actividad"
                  value={newActivity.name}
                  onChange={(e) => setNewActivity({...newActivity, name: e.target.value})}
                />
              </div>
              
              <div>
                <Select 
                  value={newActivity.dayId.toString()} 
                  onValueChange={(value) => setNewActivity({...newActivity, dayId: parseInt(value)})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Día" />
                  </SelectTrigger>
                  <SelectContent>
                    {days.map(day => (
                      <SelectItem key={day.id} value={day.id.toString()}>{day.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="relative">
                <Input
                  type="time"
                  value={newActivity.startTime}
                  onChange={(e) => setNewActivity({...newActivity, startTime: e.target.value})}
                  className="pl-10"
                />
                <Clock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>

              <div>
                <Select 
                  value={newActivity.duration.toString()} 
                  onValueChange={(value) => setNewActivity({...newActivity, duration: parseInt(value)})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Duración" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 min</SelectItem>
                    <SelectItem value="60">1 hora</SelectItem>
                    <SelectItem value="90">1.5 horas</SelectItem>
                    <SelectItem value="120">2 horas</SelectItem>
                    <SelectItem value="180">3 horas</SelectItem>
                    <SelectItem value="240">4 horas</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="sm:col-span-2 lg:col-span-5 flex justify-end">
                <Button onClick={addActivity} className="w-full sm:w-auto">
                  <Plus className="h-4 w-4 mr-2" /> Añadir Actividad
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Days Management */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-brand-primary">Itinerario del Viaje</h3>
          <Button onClick={addDay} variant="outline" className="border-brand-primary text-brand-primary">
            <Plus className="h-4 w-4 mr-2" /> Añadir Día
          </Button>
        </div>
        
        {/* Calendar Grid */}
        <div className="overflow-x-auto pb-4 border rounded-md">
          <div className="flex min-w-full">
            {/* Time column */}
            <div className="flex flex-col min-w-[80px] text-right pr-2 pt-12 bg-muted/20">
              {timeSlots.map(time => (
                <div key={time} className="h-16 flex items-center justify-end font-medium text-muted-foreground pr-3">
                  {time}
                </div>
              ))}
            </div>
            
            {/* Days columns */}
            {days.map(day => (
              <div key={day.id} className="flex-1 min-w-[250px] border-l border-border">
                <div className="flex justify-between items-center h-12 px-3 bg-primary/5 sticky top-0 border-b">
                  <h3 className="font-bold text-primary">{day.name}</h3>
                  {days.length > 1 && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => removeDay(day.id)}
                      className="h-8 w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                
                <div className="relative">
                  {timeSlots.map(time => (
                    <div 
                      key={`${day.id}-${time}`}
                      ref={el => {
                        if (!hourRefs.current[day.id]) hourRefs.current[day.id] = {};
                        hourRefs.current[day.id][time] = el;
                      }}
                      onDragOver={(e) => handleDragOver(e, day.id, time)}
                      onDrop={(e) => handleDrop(e, day.id, time)}
                      className={`h-16 border-b border-border/40 ${
                        isDraggingOver && isDraggingOver.dayId === day.id && isDraggingOver.time === time
                          ? 'bg-accent/10'
                          : 'hover:bg-muted/5'
                      }`}
                    />
                  ))}
                  
                  {/* Activities */}
                  {activities
                    .filter(activity => activity.dayId === day.id)
                    .map(activity => {
                      const top = getActivityPosition(activity.startTime);
                      const height = (activity.duration / 60) * 64;
                      
                      return (
                        <div
                          key={activity.id}
                          draggable
                          onDragStart={() => handleDragStart(activity)}
                          style={{ top: `${top}px`, height: `${height}px` }}
                          className={`absolute left-1 right-1 p-2 rounded-md border-l-4 cursor-move shadow-sm
                            ${getActivityColor(activity)} hover:shadow-md transition-shadow`}
                          onClick={() => startEditing(activity)}
                        >
                          <div className="font-medium text-sm truncate">{activity.name}</div>
                          <div className="text-xs flex items-center mt-1 text-muted-foreground">
                            <Clock className="h-3 w-3 mr-1 inline" /> {activity.startTime} ({activity.duration} min)
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Edit Modal */}
        <Dialog open={!!editingActivity} onOpenChange={(open) => !open && setEditingActivity(null)}>
          {editingActivity && (
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Editar Actividad</DialogTitle>
              </DialogHeader>
              
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <label htmlFor="activity-name" className="text-sm font-medium">Nombre</label>
                  <Input
                    id="activity-name"
                    value={editingActivity.name}
                    onChange={(e) => setEditingActivity({...editingActivity, name: e.target.value})}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="activity-day" className="text-sm font-medium">Día</label>
                    <Select 
                      value={editingActivity.dayId.toString()} 
                      onValueChange={(value) => setEditingActivity({...editingActivity, dayId: parseInt(value)})}
                    >
                      <SelectTrigger id="activity-day">
                        <SelectValue placeholder="Día" />
                      </SelectTrigger>
                      <SelectContent>
                        {days.map(day => (
                          <SelectItem key={day.id} value={day.id.toString()}>{day.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid gap-2">
                    <label htmlFor="activity-time" className="text-sm font-medium">Hora</label>
                    <div className="relative">
                      <Input
                        id="activity-time"
                        type="time"
                        value={editingActivity.startTime}
                        onChange={(e) => setEditingActivity({...editingActivity, startTime: e.target.value})}
                        className="pl-10"
                      />
                      <Clock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
                
                <div className="grid gap-2">
                  <label htmlFor="activity-duration" className="text-sm font-medium">Duración</label>
                  <Select 
                    value={editingActivity.duration.toString()} 
                    onValueChange={(value) => setEditingActivity({...editingActivity, duration: parseInt(value)})}
                  >
                    <SelectTrigger id="activity-duration">
                      <SelectValue placeholder="Duración" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30">30 min</SelectItem>
                      <SelectItem value="60">1 hora</SelectItem>
                      <SelectItem value="90">1.5 horas</SelectItem>
                      <SelectItem value="120">2 horas</SelectItem>
                      <SelectItem value="180">3 horas</SelectItem>
                      <SelectItem value="240">4 horas</SelectItem>
                      <SelectItem value="300">5 horas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <DialogFooter className="flex justify-between sm:justify-between">
                <Button 
                  variant="outline" 
                  onClick={() => setEditingActivity(null)}
                >
                  Cancelar
                </Button>
                
                <div className="flex gap-2">
                  <Button 
                    variant="destructive"
                    onClick={() => {
                      deleteActivity(editingActivity.id);
                      setEditingActivity(null);
                    }}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Eliminar
                  </Button>
                  
                  <Button 
                    onClick={saveEdit}
                  >
                    <Edit2 className="h-4 w-4 mr-2" />
                    Guardar
                  </Button>
                </div>
              </DialogFooter>
            </DialogContent>
          )}
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default TravelPlanner;
