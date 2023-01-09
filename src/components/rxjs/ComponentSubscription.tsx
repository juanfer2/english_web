import { useState, useEffect } from 'react';
import { sharingInformationService } from '@/services/sharing-information.service';

function ComponentSubscription() {
  const [count, setCount] = useState(0);
  const subscription$ = sharingInformationService.getSubject();

  useEffect(() => {
    subscription$.subscribe((data: any) => {
      if (data) setCount(count + 1);
    });
  });

  return <div>{count}</div>;
}

export default ComponentSubscription;
