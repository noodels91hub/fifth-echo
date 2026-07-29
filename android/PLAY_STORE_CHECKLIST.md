# Google Play release checklist for Fifth Echo

This checklist intentionally stops before account creation, release signing, payment setup,
or store submission. Those actions belong to the account owner.

## 1. Test the APK on real phones

- Install `artifacts/FifthEcho-0.1.0-debug.apk`.
- Test at least one older Android 8–10 phone and one current Android phone.
- Check both landscape rotations, display cutouts, gesture navigation, long-press ability help,
  combat animation pacing, suspend/resume, back gestures, all five worlds, defeat/reform, shops,
  Echo supports, and the final victory screen.
- Play offline or in airplane mode to confirm the complete campaign remains available.
- Record device model, Android version, crashes, overheating, and frame-rate problems.

## 2. Create the owner’s Play Console account

- Choose **Personal** for a hobbyist/individual or **Organization** for a registered business.
  Organization accounts require a D-U-N-S number and public organization details.
- Full public distribution currently has a one-time **US$25** registration fee.
- Complete identity, contact-email, phone, payment-profile, and Android-device verification.
- Never share the account password. Invite collaborators with scoped Play Console permissions.
- A new personal account created after November 13, 2023 must complete a closed test with at
  least **12 continuously opted-in testers for 14 days** before applying for production access.

Official references:

- [Get started with Play Console](https://support.google.com/googleplay/android-developer/answer/6112435)
- [Personal account testing requirements](https://support.google.com/googleplay/android-developer/answer/14151465)
- [Required developer account information](https://support.google.com/googleplay/android-developer/answer/13628312)

## 3. Create the Play Console app carefully

- App name: `Fifth Echo`
- Type: **Game**
- Release package: `com.noodels91hub.fifthecho`
- Decide **Free** or **Paid** before production. A free Play listing cannot later be changed to
  paid under the same package; optional digital purchases would require Google Play Billing.
- Add an owner-controlled support email.
- Accept the Developer Program, export-law, and Play App Signing declarations.
- Keep `versionCode` increasing for every uploaded build; `versionName` is user-facing.

The project targets API 36. Google’s policy requires new apps and updates to target an API
level within one year of the latest major Android release, so recheck this before every launch.

Official references:

- [Create and set up an app](https://support.google.com/googleplay/android-developer/answer/9859152)
- [Target API level policy](https://support.google.com/googleplay/android-developer/answer/16561298)

## 4. Create and protect the upload key

In Android Studio, use **Build > Generate Signed Bundle / APK > Android App Bundle > Create new**.

- Create a dedicated `.jks` upload keystore with a strong unique password.
- Give the certificate at least 25 years of validity.
- Keep the keystore and passwords outside this repository.
- Back them up in two secure owner-controlled locations.
- Let Google generate and protect the app-signing key through Play App Signing; retain the
  separate upload key yourself.
- Generate a signed **AAB**, not the debug APK or the unsigned AAB in `artifacts/`.

Official references:

- [Sign your Android app](https://developer.android.com/studio/publish/app-signing)
- [Use Play App Signing](https://support.google.com/googleplay/android-developer/answer/9842756)

## 5. Prepare the store listing

Required creative assets:

- High-resolution icon: 512 × 512, 32-bit PNG with alpha, maximum 1024 KB.
- Feature graphic: 1024 × 500, JPEG or 24-bit PNG without alpha.
- At least two screenshots, each 320–3840 px; for a landscape game, prepare at least three
  genuine 1920 × 1080 gameplay screenshots for better merchandising eligibility.
- Optional public or unlisted YouTube gameplay video with monetization disabled.

Suggested listing draft:

- Short description: `Build a party, master five lives, and break five collapsing realities.`
- Category: start with **Role Playing** or **Card**, then choose the closest available category.
- Highlight: offline single-player party-building roguelite, ability ranks, Echo supports,
  five worlds, and no ads.

Do not use “best,” ranking claims, download calls-to-action, fake awards, or unowned third-party
art, music, fonts, names, or trademarks.

Official reference:

- [Google Play preview asset requirements](https://support.google.com/googleplay/android-developer/answer/9866151)

## 6. Complete policy declarations

Current build facts to use when answering Play Console:

- Ads: **No**
- App access/login: **All functionality is available without login**
- Data collected or shared: **None**, for this exact build
- Accounts: **None**
- Network permission: **None**
- Purchases: **None**
- Privacy policy URL after the website changes are published:
  `https://noodels91hub.github.io/fifth-echo/privacy.html`

The Data safety form is still mandatory even when no data is collected, and the privacy-policy
URL and in-app privacy text are still required. Revisit both declarations before adding crash
analytics, ads, cloud saves, accounts, billing, social features, or any third-party SDK.

Also complete:

- IARC content-rating questionnaire; disclose fantasy combat accurately.
- Target audience. The current dark-fantasy combat presentation is best treated as not designed
  for young children unless the game and store strategy are deliberately changed.
- News app, government app, health app, financial features, ads, and app-access declarations.

Official references:

- [Data safety form](https://support.google.com/googleplay/android-developer/answer/10787469)
- [Google Play privacy-policy requirements](https://support.google.com/googleplay/android-developer/answer/17105854)
- [Content ratings](https://support.google.com/googleplay/android-developer/answer/9898843)

## 7. Test through Google Play before production

1. Upload the signed AAB to **Internal testing** first.
2. Invite trusted testers and install through Google Play; verify Play-generated device APKs.
3. Review pre-launch reports for crashes, accessibility, security, and device compatibility.
4. For a new personal account, create the required closed test and keep at least 12 testers
   continuously opted in for 14 days.
5. Collect feedback and upload a higher `versionCode` for every fix.
6. Apply for production access only when the whole campaign is stable.

Official reference:

- [Set up internal and closed tests](https://support.google.com/googleplay/android-developer/answer/9845334)

## 8. Payments and monetization

No payments profile beyond account verification is needed while Fifth Echo is a free game with
no purchases. If the owner later sells the download or digital content such as extra lives,
characters, currency, subscriptions, or ad removal, configure the Play payments profile and use
Google Play Billing. Do not add outside purchase links for in-app digital content without first
checking the current policy and applicable regional programs.

Official reference:

- [Google Play payments policy](https://support.google.com/googleplay/android-developer/answer/10281818)
