---
title: Thermodynamics
---
You might know that **exothermic** processes give off heat, while **endothermic** processes absorb heat. We can situate this more concretely with systems and energy:
- **Exothermic**: Energy is **transformed from** the system *to* the surroundings.
- **Endothermic**: Energy is **supplied to** the system *from* the surroundings

# First Law of Thermodynamics
Notice that, from above, energy is never lost, only transferred. This is the first law of thermodynamics. It is represented as the following equation: 

$$\Delta U=q+w$$
> [!info] Notation
> Remember, $\Delta$ represents a *change*.

This is a simple looking formula that holds a deep meaning. Let's look at it further:
- $\Delta U$ represents the change in **internal energy** (how much energy is "stored" in the system)
- $q$ represents heat transferred from or to the system. 
> [!faq]- What's the sign of q?
> 
> Recall exothermic and endothermic reactions. If we're looking *at the system*, and heat is transferred out of the system, what do you think is the sign of $q$?
> > [!todo]- Answer
> > 
> > Since it's going *out* of the system, heat is lost from the system to the surroundings, so $q$ should be negative.
- $w$ represents **work**. In chemistry, it describes a change in the amount of energy when a volume acts against an external pressure (for example, a gas expanding against air pressure).

Work can be represented as $w=-P\Delta V$, where $P$ is pressure and $\Delta V$ is a change in volume.
> [!info]- Why do we need the negative sign?
> Let's think of a scenario where a gas is expanding against its surroundings.
> 
> This is work done *by the system on its surroundings*, so this is *exothermic*. Since in an exothermic reaction we're transferring ("losing") energy to the surroundings, the change in energy should be negative. Since work is a measure of the change in energy, this means that work should be negative too, and so we need that negative sign.

___

That was complicated! Take a little time for that to sink in. If that still doesn't quite make sense. If it still doesn't quite make sense, maybe some sample problems might help.

> [!example] Example 1
> A gas *expands* from 3L to 10L against an external pressure of 1.2 atm. What's the work done by the gas in, joules?
> > [!success]- Answer
> > 
> > We want to calculate work, for which the equation is $w=-P\Delta V$. We know the following:
> > - $P = 1.2\text{ atm}$
> > - $\Delta V = \text{Final volume - initial volume} = 10L - 3L = 7L$
> > 
> > Therefore $w=-\left(1.2\text{ atm}\right)\left(7L\right)=-8.4\text{ atm}\cdot L$
> > 
> > To convert to joules, use $101.3J = 1\text{ atm}\cdot L$
> > 
> > Multiply and solve: $-8.4\text{ atm}\cdot L \left(\frac{101.3J}{1\text{atm}\cdot L}\right) = \boxed{-8.51 \times 10^2 J}$
> > 
> > > [!info] Fact check
> > > 
> > > Work is done *by* the system—think of the monster—so w should be negative.

> [!example] Example 2
> A gas is *compressed* from 6L to 2L against an external pressure of 3.7 atm. What's the work done by the gas, in joules?
> > [!success]- Answer
> > 
> > Again, using the equation $w = -P\Delta V$, we know the following:
> > - $P = 3.7\text{ atm}$
> > - $\Delta V = 2L - 6L = -4L$
> >
> > >[!warning] 
> > >
> > > $\Delta V$ is not always positive. Read the problem carefully to determine the *initial* and *final* volume. If you got $\Delta V=4L$, you confused the initial and final volume.
> > 
> > Therefore $$w=-\left(3.7\text{ atm}\right)\left(-4L\right)\left(\frac{101.3J}{1\text{atm}\cdot L}\right)=\boxed{1.5\times10^3J}$$
> > 
> > > [!info] Fact check
> > > 
> > > Work is done *on* the system—think of the monster—so w should be negative.

---

> [!example] Example 3
> A certain gas in the cylinder of an engine is compressed from 2.2L to 0.6L against an external pressure of 8.0 atm. During the process, you have the nerve to touch the engine while its running, and 140 joules of energy in the form of heat is transferred from the engine into the "surroundings" (your hand). Ow! 
> 
> What's the total change in internal energy ($\Delta U$) of the gas, in joules?
> > [!success]- Answer
> > 
> > This time, we use the equation $\Delta U=q+w$. We know that $w=-P\Delta V$, so we can rewrite this equation as $\Delta U = q-P\Delta V$. Let's solve for the values on the right hand side.
> > - $q=-140J$ (remember, heat is transferred *from* the system to the surroundings, so $q$ is negative. Think of the monster.)
> > - $P = 8.0\text{ atm}$
> > - $\Delta V = 0.6L - 2.2L = -1.6L$ (remember, don't mix up final and initial volume!)
> > 
> > Plug in and solve: $$\Delta U=-140J - \left(8.0\text{ atm}\right)\left(-1.6L\right)\left(\frac{101.3J}{1\text{atm}\cdot L}\right)=\boxed{1.16\times10^3J}$$
> > 
> > > [!info] Making sense of the answer
> > > 
> > > The engine is generating energy, so it makes sense that we got a value of $\Delta U$ that signifies that the energy of the engine is increasing.

> [!example] Example 4
> A gas is in a piston expands from 0.24L to 1.35L against an external pressure of 2.41 atm. During this expansion, 202J of heat is transferred from the surroundings to the gas. What is the internal energy change ($\Delta U$) of this process, in joules?
> > [!success]- Answer
> > 
> > We will again use $\Delta U=q+w$, or equivalently $\Delta U=q-P\Delta V$
> > - $q=202J$ (*from* surroundings to system means $q$ is positive)
> > - $P = 2.41\text{ atm}$
> > - $\Delta V = 1.35L - 0.25L = 1.11L$
> > 
> > Plug in and solve: $$\Delta U=202J - \left(2.41\text{ atm}\right)\left(1.11L\right)\left(\frac{101.3J}{1\text{atm}\cdot L}\right)=\boxed{-69.0J},\text{ nice}$$







