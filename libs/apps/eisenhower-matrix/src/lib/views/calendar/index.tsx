import { SwitchTransition } from '@k-workspace/shared/components';
import { CalendarProvider, useCalendar } from '@k-workspace/shared/hooks';
import MonthView from './components/MonthView';
import OptionsBar from './components/OptionsBar';
import WeekView from './components/WeekView';

const Views = () => {
  const { currentView } = useCalendar();
  return (
    <>
      <SwitchTransition currentPage={currentView} name="MONTH">
        <MonthView />
      </SwitchTransition>
      <SwitchTransition currentPage={currentView} name="WEEK">
        <WeekView />
      </SwitchTransition>
      <SwitchTransition currentPage={currentView} name="DAY">
        <div>{currentView}</div>
      </SwitchTransition>
      <SwitchTransition currentPage={currentView} name="YEAR">
        <div>{currentView}</div>
      </SwitchTransition>
    </>
  );
};

const Calendar = () => {
  return (
    <CalendarProvider>
      <OptionsBar />
      <Views />
    </CalendarProvider>
  );
};

export default Calendar;
