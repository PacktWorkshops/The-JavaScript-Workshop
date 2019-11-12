function isEligible(distance, membershipstatus) {
  if (distance < 1 || membershipstatus === "active" && distance > 10 || membershipstatus === "inactive" && distance > 5 ) {
    return false;
  }
  return true;
}
console.log( isEligible(.5, "active") );
// =>   false
console.log( isEligible(7, "inactive") );
// =>   false
console.log( isEligible(7, "active") );
// =>    true