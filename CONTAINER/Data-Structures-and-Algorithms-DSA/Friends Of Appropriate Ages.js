/* Some people will make friend requests. The list of their ages is given and ages[i] is the age of the ith person. 

Person A will NOT friend request person B (B != A) if any of the following conditions are true:

    age[B] <= 0.5 * age[A] + 7
    age[B] > age[A]
    age[B] > 100 && age[A] < 100

Otherwise, A will friend request B.

Note that if A requests B, B does not necessarily request A.  Also, people will not friend request themselves.

How many total friend requests are made?

Input: [16,17,18]
Output: 2
Explanation: Friend requests are made 17 -> 16, 18 -> 17.
*/

var numFriendRequests = function(ages) {
    const nums = Array(121).fill(0)
    for (let age of ages) nums[age]++
    let sum = 0,
        min = 15,
        req = 0
    for (let i = 15; i < 121; req += nums[i++] * (sum - 1)) {
        sum += nums[i]
        while (min <= 0.5 * i + 7) sum -= nums[min++]
    }
    return req
};
