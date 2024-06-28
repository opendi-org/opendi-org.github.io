# OpenDI Intro

**NOTE:** The following was pulled from the March 2024 draft of the original User Stories document. It has not been edited since. **We may want to revisit the idea of an OpenDI introduction outside of the context of user stories**, but much of this material should work pretty well for that purpose, at least temporarily.
-Isaac

## Purpose of OpenDI

The purpose of the OpenDI initiative is to foster a vibrant and healthy ecosystem for decision intelligence, which supports innovative DI research, a healthy vendor market, and &mdash; ultimately &mdash; better decisions in many domains worldwide.  

One of the biggest impediments to such an ecosystem is _fragmentation_, where multiple entities are building DI systems unaware of each other, and in different ways.  The opposite of fragmentation is _standardization_, which has substantial benefits including reduced costs, reduced risks, faster time-to-market for vendors, easier use of research assets, an easier way to create cross-organizational synergies.  Ultimately, all of these factors lead to substantially greater value to the people that use decision intelligence technology.

### Understanding where OpenDI fits into the history of tech
As technologies mature, they often go through a divergence/convergence pattern (Figure 1), where a creative "breathe out" period of "let a thousand flowers bloom" is followed by a "breathe in" convergence phase where cross-industry standards are established.  Examples of this pattern abound, from NTSC/PAL for televisions to DOCSIS in broadband networks, to standards that specify how a set-top-box talks to a television, to the TCP/IP and HTML standards that made the internet explode.

![Technology's convergence/divergence pattern](img/convergence-divergence-of-tech.png)
*Figure 1: Convergence/Divergence pattern of technology*

Importantly, these _open interoperability_ standards specify how technology from _different_ entities communicates with each other.  Importantly, this is different than _open source_ standards, which unlike _interface_ standards, actually make public the _inside_ of the technology boxes. With open interopability standards, vendors can still create proprietary (secret) systems; it is only the way that they interoperate with other systems that is open.

When good standards are built, technology markets *explode*: often creating huge benefits from the buyers of that technology.  A good example is the standards underlying the internet.  I (LP) used chat rooms, email, and connected computers starting in the 1970s before these standards existed, and it created massive friction compared to what we see today.  I remember when the internet standards became widespread in the 1980s/early 1990s and what a difference that made!  So much so that we forget that there was a time before the standards existed.

Why is this relevant? Because decision intelligence is at a crossroads where an explosion of vendors are increasingly fragmented, leaving the true value and democratization of this technology unrealized.

Please work with us as we create the standards that make DI "explode", too: not just for a handful of "big tech" firms but for thousands of academic departments, software vendors, consultants large and small, governments, and more, worldwide.

For a standards project to be successful, we have to start with a common language and a shared understanding of the "standard" components of a system.  For the telephone network, this said, "there is such a thing as a telephone, which is dialed in this particular way, which sends a signal down a wire in this way, and it is connected via some kind of wire to a central office (CO), and COs are connected together via long-distance lines".  For DI, 

## High-level picture of the reference architecture
Figure 2 shows the basic picture of how we see the "standard" components of a DI software system today (note that there are much more detailed versions of this picture that are in development at the moment, this is just a basic one to get you started):

![High level DI reference architecture](img/di-reference-architecture-blue.png)
*Figure 2: High-level DI reference architecture*

The DI interoperability standard specifies how each layer talks to the others, and how they all talk to an _Orchestration_ component.