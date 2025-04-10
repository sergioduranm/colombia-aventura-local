
  const timeToMinutes = (time: string): number => {
    const [hoursStr, minutesStr = '0'] = time.split(':');
    const hours = parseInt(hoursStr, 10);
    const minutes = parseInt(minutesStr, 10);
    return hours * 60 + minutes;
  };
