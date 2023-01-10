import { CardTopics } from '@/organisms';
import { IoBasketballOutline } from 'react-icons/io5';
import { GerunsAndInfinitivesStyled } from './GerunsAndInfinitives.styles';
import data from '@/assets/data/gerunds_and_infinitives.json';

function GerunsAndInfinitives() {
  const topics: any = data;
  return (
    <GerunsAndInfinitivesStyled>
      <h1 className="title-page">Lear when use geruns and infinitives</h1>

      <div className="topics-list">
        {topics.data.map((topic: any) => (
          <CardTopics
            key={topic.topic}
            title={topic.topic}
            subtitle={topic.info}
            description={topic.description}
            icon={<IoBasketballOutline size={25} />}
          />
        ))}
      </div>
    </GerunsAndInfinitivesStyled>
  );
}

export default GerunsAndInfinitives;
