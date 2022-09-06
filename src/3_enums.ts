enum Membership {
  Simple,
  Standard,
  Premium
}

const membership = Membership.Standard;
console.log(membership);
const membershipReverse = Membership[2];
console.log(membershipReverse);

enum SocialMedia {
  VK = "VK",
  FACEBOOK = "FACEBOOK",
  INSTAGRAM = "INSTAGRAM"
}

const social = SocialMedia.FACEBOOK;
console.log(social, SocialMedia["VK"]);
