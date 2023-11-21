---
title: Storyboarding 101
description: Understanding the Quirks and Limitations of OSB
---

Storyboarding in osu!, using the OSB (Osu! StoryBoarding) format, is both a creative endeavor and a technical challenge. It's essential to understand the limitations and quirks of the OSB engine to craft engaging and functional storyboards, especially when working with notOSU!.

## The Age of OSB: Quirks and Limitations

1. **One Command at a Time**: In traditional OSB scripting, a sprite can only process one move command at a time. This means you cannot simultaneously execute multiple move commands for a single sprite. Each command must complete before the next one begins, requiring careful planning and sequencing.

2. **Early Days, Simple Tools**: When osu! was just starting out, OSB was made with a simple idea in mind. It was all about having storyboards on the top screen and a combo of a background, 3D models, and the game area on the bottom. So, OSB's kind of basic – it can handle stuff like moving, scaling, rotating, and fading, but it's not really cut out for the more complex tricks you see in newer animation software.

3. **Performance Considerations**: OSB is not optimized for handling a large number of sprites or complex animations. Excessive use of sprites or intricate animations can lead to performance issues, especially on lower-end systems.

4. **No Real-time Interactions**: OSB doesn't support real-time user interactions or changes based on gameplay. Storyboards are pre-rendered and play the same way each time.

## notOSU! Enhancements

While working within these constraints, notOSU! offers enhancements and workarounds to make storyboard creation more flexible and powerful:

- **Command Overlap Support**: Unlike standard OSB, notOSU! supports overlapping commands. This allows for more dynamic and complex animations, as multiple transformations can be applied to a sprite without waiting for the previous one to finish.

- **Optimized for osu!mania**: notOSU! is tailored for osu!mania storyboarding, providing tools and functionalities that align with the game mode's specific requirements.

- **Enhanced Creative Control**: With notOSU!, storyboard creators can manipulate playfields, notes, receptors, and other elements more effectively, offering a broader scope for creativity.

## Conclusion

Understanding these quirks and limitations is crucial for effective storyboarding in osu!. notOSU! steps in to enhance the storytelling potential within these boundaries, offering more flexibility and creative control tailored for osu!mania. As you embark on your storyboarding journey, keep these aspects in mind to navigate the challenges and make the most of your creative endeavors.