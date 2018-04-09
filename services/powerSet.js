function powerSet (arr) {
  if (arr.length === 0) {
    return [[]];
  }

  let lastElement = arr.pop();
  let restPowerset = powerSet(arr);

  let powerset = [];
  for (let i = 0; i < restPowerset.length; i++) {
    let set = restPowerset[i];

    powerset.push(set);

    set = set.slice(); 
    set.push(lastElement);
    powerset.push(set);
  }

  return powerset;
};

function subsetsLessThan (arr, number) {

    const powerset = powerSet(arr);
    const subsets = [];

    for (let i = 0; i < powerset.length; i++) {
        let subset = powerset[i];
        let sum = 0;

        for (let j = 0; j < subset.length; j++) {
            sum += subset[j];
        }

        if (sum <= number) {
            subsets.push(subset);
        }
    }

    return subsets;
};

module.exports = {
    subsetsLessThan
}
