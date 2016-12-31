# Memory Palace Training

Web Application for learning how to memorize long random numbers. A description of its use can be seen here:

[How to Memorize Huge Numbers with a Brain Hack](https://medium.com/p/2be34921684c)

## Live Demo

[Memory Palace Live Demo](https://grasptheory.com/sites/memorypalace)

## Usage

The goal of using this app is to learn to map the digits from 00 - 99 to an object that can be used within a Memory Palace. The images and image descriptoins should be personally relevant to you for the best results. For examnple, the digits 60-69 are people in my family from youngest to oldest. You should replace these images in the /images directory and update the description of the group and each item in that groupin the scripts/modules/MemoryPalace/Services/MemoryTestService.svc.js file.

For this memorization technique to work, you must be able to go from digit to object and then object back to digit. Therefore, there are two training modes to help you learn both encoding and decoding.

Each image will also be shown with it's corresponding group images. This will help you remember where within that group the image is. There is additional styling of the images to help you associate different positions of the images within the group.

Each group has a scale associated with it, so objects/images are sorted by that scale for that group. For instance, 40-49 are "Fruits & Veggies" organized by size. Use that additional information to help you learn.

Eventually you will start to associate the number directly with the object without needing to think about the group or placement within the group.
