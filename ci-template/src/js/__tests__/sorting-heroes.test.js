import heroeSorting from '../sorting-heroes';

test('Check sorted', () => {
  const initialData = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const received = heroeSorting(initialData);

  const expected = [
    { name: 'мечник', health: 10 },
    { name: 'лучник', health: 80 },
    { name: 'маг', health: 100 }
  ];

  expect(received).toEqual(expected);

});
