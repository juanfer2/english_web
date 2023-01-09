import React from 'react';
import { sharingInformationService } from '@/services/sharing-information.service';

function ComponentEmiter() {
  const handleClick = () => {
    sharingInformationService.setSubject<Boolean>(true);
  };

  const handleClickNo = () => {
    sharingInformationService.setSubject<Boolean>(false);
  };

  return (
    <div>
      <button onClick={handleClick}>Enviar information</button>
      <button onClick={handleClickNo}>NO Enviar information</button>
    </div>
  );
}

export default ComponentEmiter;
