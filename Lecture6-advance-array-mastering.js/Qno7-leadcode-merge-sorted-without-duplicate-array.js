let nums2 = [2, 5, 6];
let n = nums2.length;
let nums1 = [1, 2, 3, ...new Array(n)];

let i = (nums1.length - n) - 1,
  j = nums2.length - 1,
  k = ((nums1.length - n)  + nums2.length) - 1;

while (i >= 0 && j >= 0) {
  if (nums1[i] > nums2[j]) {
    nums1[k] = nums1[i];
    i--;
  } else {
    nums1[k] = nums2[j];
    j--;
  }

  k--;
}


// its take more execution time 
// while (i >= 0) {
//   nums1[k] = nums1[i];
//   i--;
//   k--;
// }


while (j >= 0) {
  nums1[k] = nums2[j];
  j--;
  k--;
}

console.log(nums1);
