import { Card } from '@/components';
import { theme } from '@/styles/theme';
import { Button } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { CardTopicsStyled } from './CardTopics.styles';

export interface Props {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  description?: string;
}

function CardTopics({ title, subtitle, icon, description }: Props) {
  return (
    <Card color="primary">
      <CardTopicsStyled>
        <div className="card-topics-title">
          {icon && <div className="card-topics-icon">{icon}</div>}

          <div className="info">
            <h3 className="title">{title}</h3>
            {subtitle && <span className="subtitle">{subtitle}</span>}
          </div>
        </div>

        <div className="card-info-description">
          <p className="description">{description}</p>
        </div>

        <div className="card-topics-actions">
          <Button color={theme.colors.primary} className="button-action">
            Go to lesson <IoArrowForwardOutline />{' '}
          </Button>
        </div>
      </CardTopicsStyled>
    </Card>
  );
}

export default CardTopics;
