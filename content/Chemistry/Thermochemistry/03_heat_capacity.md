---
title: Heat Capacity
draft: true
---
What, exactly, is heat?

As we saw in the first law of thermodynamics, heat is a measure of energy. However, in everyday conversations, it is often mixed up with temperature. To differentiate the two terms, consider the following analogy.

> I have two buckets of water, both filled up to the same height. One of the buckets is much wider than the other. If I poured the same amount of water to both buckets, the water height of the larger bucket would rise much slower.

In this analogy, temperature is the water height, while heat is the water poured in. If I had a cup of water and a swimming pool, both at room temperature, and I threw a scalding hot rock into both of them, the *heat* added is the same, but the *temperature* rises much less in the swimming pool than the cup.

In fact, heat isn't even a quantity. It's a *change*. In the bucket analogy, the water added is a change in the amount of water in each bucket.

---

In chemistry, we define heat as the *flow of energy caused by a temperature change*. This makes sense. Recall the hot rock thrown into the swimming pool. As the rock sinks into the pool, energy starts flowing from the rock into the pool. Since the pool is so large, that energy is distributed across the pool such that it has a small effect, like how adding water to the large bucket rose the water height only by a bit.

This is the basis of **calorimetry**. In calorimetric experiments, we seek to measure heat flow. From what we've learned above, in addition to measuring temperature, we also have to factor is volume (cup vs swimming pool) and possibly pressure.

More specifically, in most calorimetric experiments, we seek to measure the heat flow of *reactions*. For example, we could measure the heat output of the combustion of black powder (explosions! hell yea!), or calculate the fuel values of food by measuring their heat output (this is where the word "calories" comes from).

To understand the basic idea of how calorimetry works, we'll start with a simple heat exchange, no reactions involved.

# Heat Capacity
The **heat capacity** of a substance is the energy input required to raise its temperature by 1C. Since the amount of substance matters, we usually talk about heat capacity *per gram* (specific heat), or heat capacity *per mole* (molar heat capacity).

We denote heat capacity as $C_{substance}$, and specific heat as $s_{substance}$. For example, through experimentation, James Prescott Joule determined that the specific heat of water was: $$S_{H2O}=4.184\text{ J}/{g^{\circ}\text{C}}$$
> [!faq] What's up with the weird unit?
> J (Joules) is a measure of energy. We're measuring it as an energy *per* temperature change of 1C, so we divide by C. Finally, specific heat is measured *per* gram, so we divide by g to get J/gC

For example, to raise the temperature of 5g of water by 7C requires and added energy of $$5g*7C*4.184J/gC=146J$$
This is the first important formula we will use for calorimetry. Given a substance's mass (m), the change in temperature desired (dT) and its specific heat (s), the total heat flow (q) is: $$q=ms\Delta T$$
What's really cool about this is that, with the specific heat of water, you can pretty much discover all of the other specific heats. Let's start with copper. I drop a 2kg chunk of copper at 100C (hot!) into a tub of 5kg water at 30C. [insert iamge]

After the rock cools and thbe water rises in temperature, they both settle at a temperature of 32.4C. Wow! The rock cooled by a lot, but the water temperature barely budged!

We calculate the associated temperature changes: [insert]

Then the heat change for water is: [insert]

But remember! Assuming no heat left the tub, by the law of conservation of energy, all that heat came from the rock! In other words, the rock lost just as muchj energy as the water gained: that is: $$q_{copper}=-q_{water}$$
So we can plug in $q_{water}=50208J$ and $q_{copper}=ms\Delta T$:

[insert]

> [!faq] What does this result tell us?
> 
> We see that copper's specific heat is much less than that of water. Water can absaorb heat with little rise in temperature, butr copper can lose its hjeat with an almost effortless decrease in temperature.
> 
> Why is this? FOr one, water has many hyudrogen bonds in its structure, which, you may recall, are very strong. These bonds make it hard for water's molecules to move! ON the other hand, copper has lots of electrons flying around, and adding or removingt energy makes these eelctrons fly faster or slower, so its easier for its temperature to change.

Chemists have compiled a long table of these specific heats for experimentation. [insert table]

---

Now that we understand heat capacity, let's apply it to some problems.

Example 1: [note to Daniel: make sure that antifreeze is not on the table but iron is] A student acquires a 500g beaker of antifreeze at room temperature (25C). He takes a 50g chunk of iron, heats it to 40C, and submerges it into the antifreeze beaker. After a while, the antifreeze settles to a temperatuer of 25.28C. Calculate the specific heat of antifreeze. (answer should be around 2.4)

Example 2: I have a container of 316mL (316g) of water. The water is at a temperature of 28.75C. I have some lead pellets that are 25g each, and have a temperature of 134.6C. How many lead pellets do I need to drop into the container to raise thge water temperature to 30C? (answer should be 4 pellets, 100g)

Example 3: Johnny loves to take baths in tubs of ethanol (fun!). He prepares a 40L (40kg) tub of ethanol at 20C. To heat up his bath, he just happens ot have a 5kg block of iron lying around at 813C. He drops it in his bath and waits for his bath to warm. How warm is the ethanol bath after the temperature stabilizes? (answer should be 37.5C)










