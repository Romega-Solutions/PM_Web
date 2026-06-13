export const SUPPORT_EMAIL = "support@pinaymate.com";
export const LEGAL_EMAIL = "legal@pinaymate.com";

export const SUPPORT_EMAIL_SENSITIVE_DATA_WARNING =
  "Do not send passwords, payment details, ID documents, or private message screenshots by email.";

export const LEGAL_EMAIL_SENSITIVE_DATA_WARNING =
  "I understand I should not send passwords, payment details, ID documents, private message screenshots, or raw identity documents by email.";

export const SUPPORT_EMAIL_LAUNCH_BOUNDARY =
  "I understand this support email does not change my app account, profile, matches, checkout, or payments.";

export const WAITLIST_EMAIL_LAUNCH_BOUNDARY =
  "I understand this waitlist email only records my interest for PinayMate updates.";

export const WAITLIST_EMAIL_DATA_BOUNDARY =
  "I understand I should not include passwords, payment details, ID documents, precise location, or private profile information.";

export const PLAN_INTEREST_EMAIL_WARNING =
  "I understand this plan-interest email is not checkout. Do not include payment details, ID documents, location, or private profile information.";

const SUPPORT_MAILTO_PREFIX = "mailto:support@pinaymate.com?";
const LEGAL_MAILTO_PREFIX = "mailto:legal@pinaymate.com?";
const encodeMailtoField = (value: string) => encodeURIComponent(value);

function buildSupportEmailHref(subject: string, prompt: string) {
  const body = `Hi PinayMate team,\n\n${prompt}\n\n${SUPPORT_EMAIL_LAUNCH_BOUNDARY}\n\n${SUPPORT_EMAIL_SENSITIVE_DATA_WARNING}\n`;

  return `${SUPPORT_MAILTO_PREFIX}subject=${encodeMailtoField(subject)}&body=${encodeMailtoField(body)}`;
}

export function buildWaitlistEmailHref(
  platform: "iOS" | "Android",
  email?: string,
) {
  const trimmedEmail = email?.trim();
  const emailLine = trimmedEmail
    ? `\nMy preferred waitlist email: ${trimmedEmail}\n`
    : "";
  const body = `Hi PinayMate team,\n\nI'd like to join the ${platform} waitlist.${emailLine}\n${WAITLIST_EMAIL_LAUNCH_BOUNDARY}\n\n${WAITLIST_EMAIL_DATA_BOUNDARY}\n`;

  return `${SUPPORT_MAILTO_PREFIX}subject=${encodeMailtoField(`PinayMate ${platform} waitlist`)}&body=${encodeMailtoField(body)}`;
}

function buildLegalEmailHref(subject: string, prompt: string) {
  const body = `Hi PinayMate legal team,\n\n${prompt}\n\n${LEGAL_EMAIL_SENSITIVE_DATA_WARNING}\n`;

  return `${LEGAL_MAILTO_PREFIX}subject=${encodeMailtoField(subject)}&body=${encodeMailtoField(body)}`;
}

export const launchEmailLinks = {
  iosWaitlist: buildWaitlistEmailHref("iOS"),
  androidWaitlist: buildWaitlistEmailHref("Android"),
  launchSupport: buildSupportEmailHref(
    "PinayMate launch support",
    "I need help with:",
  ),
  supportQuestion: buildSupportEmailHref(
    "PinayMate support question",
    "I need help with:",
  ),
  safetyQuestion: buildSupportEmailHref(
    "PinayMate trust and safety question",
    "I have a trust or safety question about:",
  ),
  legalQuestion: buildLegalEmailHref(
    "PinayMate legal question",
    "I have a legal or privacy question about:",
  ),
} as const;

export function buildPlanInterestEmailHref(planName: string, subject: string) {
  const body = `Hi PinayMate team,\n\nI'd like to register interest for ${planName}.\n\n${PLAN_INTEREST_EMAIL_WARNING}\n`;

  return `${SUPPORT_MAILTO_PREFIX}subject=${encodeMailtoField(subject)}&body=${encodeMailtoField(body)}`;
}
