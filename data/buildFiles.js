const tableName='GroupsTable';
const entries = [
  {invite_code: 'brook domain', group: 'connors', invite_type: 'day'},
  {invite_code: 'hovercraft salad', group: 'nunn', invite_type: 'day'},
  {invite_code: 'human theme', group: 'trevor', invite_type: 'day'},
  {invite_code: 'futon rough', group: 'us', invite_type: 'day'},
  {invite_code: 'jeep press', group: 'calvert', invite_type: 'day'},
  {invite_code: 'carport video', group: 'cook', invite_type: 'day'},
  {invite_code: 'poster sky', group: 'westcott', invite_type: 'day'},
  {invite_code: 'interior sleet', group: 'westcott2', invite_type: 'day'},
  {invite_code: 'producer stair', group: 'cook2', invite_type: 'day'},
  {invite_code: 'garlic session', group: 'langridge', invite_type: 'day'},
  {invite_code: 'price world', group: 'parmer', invite_type: 'day'},
];

const result = {
  [tableName]: entries.map(entry => {
    const res = {
      PutRequest: {
        Item: {}
      }
    };

    Object.keys(entry).forEach(key => res.PutRequest.Item[key] = { "S": entry[key] });

    return res;
  })
};

console.log(JSON.stringify(result, null, 2));