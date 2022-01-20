import { getFeaturedEvents } from "./../dummy-data";
import EventList from "./../components/events/event-list";
export default function HomePage() {
  const featuredComponents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredComponents} />
    </div>
  );
}
