function kmeans(data, k) {
  // Randomly initialize centroids
  let centroids = getRandomCentroids(data, k);

  // Initialize cluster assignments
  let assignments = Array.from({ length: data.length }, () => null);

  // Iterate until convergence
  while (true) {
    // Assign data points to the nearest centroid
    let newAssignments = assignPointsToCentroids(data, centroids);

    // Check for convergence
    if (isEqual(assignments, newAssignments)) {
      break;
    }

    // Update cluster assignments
    assignments = newAssignments;

    // Update centroids
    centroids = updateCentroids(data, assignments, k);
  }

  // Return the final cluster assignments
  return assignments;
}

function getRandomCentroids(data, k) {
  const centroids = [];
  const indices = [];

  while (indices.length < k) {
    const index = Math.floor(Math.random() * data.length);
    if (!indices.includes(index)) {
      indices.push(index);
      centroids.push(data[index].slice());
    }
  }

  return centroids;
}

function assignPointsToCentroids(data, centroids) {
  const assignments = [];

  for (const point of data) {
    let minDistance = Infinity;
    let closestCentroid = null;

    for (let i = 0; i < centroids.length; i++) {
      const distance = euclideanDistance(point, centroids[i]);

      if (distance < minDistance) {
        minDistance = distance;
        closestCentroid = i;
      }
    }

    assignments.push(closestCentroid);
  }

  return assignments;
}

function updateCentroids(data, assignments, k) {
  const centroids = Array.from({ length: k }, () => Array(data[0].length).fill(0));
  const clusterSizes = Array(k).fill(0);

  for (let i = 0; i < data.length; i++) {
    const centroid = assignments[i];
    const point = data[i];

    for (let j = 0; j < point.length; j++) {
      centroids[centroid][j] += point[j];
    }

    clusterSizes[centroid]++;
  }

  for (let i = 0; i < centroids.length; i++) {
    for (let j = 0; j < centroids[i].length; j++) {
      centroids[i][j] /= clusterSizes[i];
    }
  }

  return centroids;
}

function euclideanDistance(pointA, pointB) {
  let sum = 0;

  for (let i = 0; i < pointA.length; i++) {
    sum += (pointA[i] - pointB[i]) ** 2;
  }

  return Math.sqrt(sum);
}

function isEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}


export function calculateGroup(data, pointToFind){
  // Example usage
  // const data = [
  //   [1, 1],
  //   [2, 2],
  //   [10, 10],
  //   [11, 11],
  //   [20, 20],
  //   [21, 21]
  // ];

  const k = 3;

  const assignments = kmeans(data, k);
  console.log(assignments);
  // const pointToFind = [23, 11];
  const centroids = updateCentroids(data, assignments, k);

  // Calculate the distances between the point and centroids
  const distances = [];
  for (const centroid of centroids) {
    distances.push(euclideanDistance(pointToFind, centroid));
  }

  // Find the index of the closest centroid
  const closestCentroidIndex = distances.findIndex((distance, index) => index === distances.indexOf(Math.min(...distances)));

  if (closestCentroidIndex !== -1) {
    const group = closestCentroidIndex;
    console.log(`The Person is likely to be in group ${group}.`);
  } else {
    console.log(`Could not infer the group for the person.`);
  }
  console.log(closestCentroidIndex)
  return closestCentroidIndex;

}