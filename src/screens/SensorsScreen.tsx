import * as React from 'react';

import DefaultLayout from '../layouts/DefaultLayout';
import SensorView from '@components/SensorView';

function SensorsScreen(): JSX.Element {
  const axis = ['x', 'y', 'z'];

  const availableSensors = {
    accelerometer: axis,
    gyroscope: axis,
    magnetometer: axis,
    barometer: ['pressure'],
  };

  return (
    <DefaultLayout title="Sensors!">
      {Object.entries(availableSensors).map(([name, values]) => (
        <SensorView key={name} sensorName={name} values={values} />
      ))}
    </DefaultLayout>
  );
}
export default SensorsScreen;
