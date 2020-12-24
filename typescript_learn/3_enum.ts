enum MemberShip {
  Simple,
  Standard,
  Premium,
}
const a = MemberShip; // ?
const membership = MemberShip.Standard;
const membershipReverse = MemberShip[2]; // Что не так?

enum SocialMedia {
  VK = 'VK',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM',
}

const social = SocialMedia.INSTAGRAM;
