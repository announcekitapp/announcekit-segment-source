# Install Guide
This is a simple guide showing how you can use AnnounceKit as a `Source` and send user event data into Segment platform.

## 1. Login to your Segment Dashboard
From your Segment Dashboard right main menu navigate to Connections ➝ Catalog ➝ Functions. On that page, you'll see a button which will navigate you to the section where you can create new Functions.

![Step 1](https://img.announcekit.app/0000000000000000c4f775d8466aa6d1?w=1200&s=3df88625ffebbb1e4055cd43e4be781f)


## 2. Create New Function
At this stage you'll create the Function which sends AnnounceKit user events to the Segment. As we use AnnounceKit as a `Source`, you need to pick `Source` type and continue to the next step, where you create the Function. 

![image info](https://img.announcekit.app/0000000000000000edcd7f7bbef5dffc?w=1200&s=87798170c16aae76ada7f72d8f8d2731)

You can find functions code in [`handler.js`](/handler.js) file.

![image info](https://img.announcekit.app/00000000000000003f72d0ae991797e2?w=1200&s=395c97cd7dc491713470ad283567ac82)

## 3. Connect AnnounceKit Source
After you create the Function, now you can connect the AnnounceKit Source into your workspace. 

![image info](https://img.announcekit.app/0000000000000000902d176ec06b4318?w=1200&s=35b84637897e280f502a1c2ff1b72123)

## 4. Add Destinations
At the last step, you can add any Segment Destination that you'd like to receive AnnounceKit user events. Don't forget to copy the `Webhook` url, and share it with us.

![image info](https://img.announcekit.app/00000000000000003e3c37dbc7527574?w=1200&s=e6c4513e089f6145d13187e20b443db1)


