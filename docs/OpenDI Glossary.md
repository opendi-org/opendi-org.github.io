## OpenDI Glossary

This glossary provides our agreed-to definitions of "terms of art" in DI, to reduce ambiguity and increase clarity, reducing confusion, as we work together.

## Action
 The behavior that implements a [Choice](#choice) that has been made with the intent of achieving an [Outcome](#outcome). Actions are enacted by [Decision Maker](#decision-maker)(s) once [Decision Making](#decision-making) is complete.

For example, an Action might be to budget $3,000 for marketing activities. This Action would follow after making the Choice for this specific budget, out of a range of possible budgets encapsulated in a Lever.  
Compare this to the examples given for [Choice](#choice) and [Lever](#lever).

Note:  
Unlike in a process model, DI does not model a *series* of actions, tasks, or choices, but rather addresses the *consequences* of Actions over which the Decision Maker has no further control after the Action is taken. In our example, we think through the consequences of the marketing budget decision during the DI process, but tasks taken to spend that money are modeled using non-DI approaches like a project schedule.

Note:
There are things we do that aren't actions in the DI sense. For instance, we might gather some data, talk to employees, or commute to work and back. In the DI context, we talk about Actions in a specific sense as one of several choices we might make.

## Action-to-Outcome Exploration
 The process of using *forward simulation* 
 to explore how different values of actions lead to different intermediates and outcomes.

 Without DI, most action-to-outcome exploration is done "in your head", imagining the consequences of various actions you might take.  DI says, "let's use a computer to help with that process", providing this exploration through a user interface or performed overnight in a batch setting.

## Application Programmer Interface (API)
 A software interface with well-defined inputs, outputs, and behavior that allows a program like a CDD simulator to use the services of another independently developed piece of software like a Technology Service implementing a Decision Asset.

## Assumption
 In decision modeling or decision simulation, an assumption is an external factor about which we have some uncertainty.

## Causal Chain
 A cause-and-effect path through a [Causal Decision Diagram](#causal-decision-diagram-cdd) starting at a [Lever](#lever) ([Action](#action)) and ending at an [Outcome](#outcome).

 Note that in DI, there are varying levels of what we mean by "causal" in a causal chain. When we first elicit causal chains from subject-matter experts, we can honestly say that they are more "causal-ish" than anything else, because people aren't great at separating causation from correlation, and because they sometimes mix in the fact that 3 and 5 "cause" 7 if we add them together - ways of causal thinking that don't fit a strict formalism.

 In DI, we find it's important to capture these "causal-ish" chains, and then to refine them as needed into software, when ends up being more constrained and formal.

## Causal Decision Diagram (CDD)
 A diagram that shows the[Decision Elements](#decision-element), linked by [Causal Chains](#causal-chain), pertinent to a [Decision](#decision). 

See also: [Causal Decision Model (CDM)](#causal-decision-model-cdm), which is a computer implementation of the CDD.

For an introduction to CDD concepts, see [this article by Mark Zangari](https://www.lorienpratt.com/guest-post-connecting-decisions-to-data-a-case-study-part-2-cdd-basics/).

## Causal Model
 An analytical or software model that provides qualitative or quantitative information about a Dependency or Causal Chain.
 
 Examples include machine learning models, statistical models, and economic models. 

## Causal Decision Model (CDM)
 A computerized representation of a [Causal Decision Diagram (CDD)](#causal-decision-diagram-cdd).

## Choice
 One selection from the options encapsulated in a [Lever](#lever).

Choices are later implemented as [Actions](#action) taken by the [Decision maker](#decision-maker).

For example, "we will invest $3,000 in marketing" is a choice.  
Compare this to the examples given for [Action](#action) and [Lever](#lever).

## Collaboration Tool
 An interactive whiteboard where a distributed team can collaborate on building a [CDD](#causal-decision-diagram-cdd).

Examples include:
* [Zoom](https://www.zoom.com/en/products/online-whiteboard/)
* [Lucidspark](https://lucidspark.com/landing/create/whiteboard-software)
* [Microsoft Teams Whiteboard](https://support.microsoft.com/en-us/office/use-whiteboard-in-a-teams-meeting-26f87802-b37f-4af0-806d-af79fbfb8ae6)

## Computational Resource
Resources necessary for decision simulation, managed and used by [Decision Simulation Managers](https://opendi-org.github.io/roles-user-stories/Roles/Decision%20Simulation%20Manager) and [Decision Simulation Builders](https://opendi-org.github.io/roles-user-stories/Roles/Decision%20Simulation%20Builder).

Examples include:
- Hardware resources
	- GPUs
	- CPUs
- Server space
- Computation time

## Convergent Thinking
Synonymous with Analytical thinking, and somewhat like Kahnemann's System 2, it means thinking carefully through some reasoning process.

Compare to [Divergent Thinking](#divergent-thinking).

## Decision
In the context of DI, a decision is about [Actions](#action) leading to [Outcomes](#outcome).

Understanding a decision means understanding causal relationships in [Causal Chain](#causal-chain)s.

Note that the word "decision" has other meanings in the world, most often a decision to label or predict something, like a picture of a cat or tomorrow's weather. These are not action-to-outcome decisions, and so are different (but still important!).

## Decision Approach
A high-level methodology that guides the decision-making process.

Sometimes approaches may be presented as dichotomies.  
Examples include:
- Data-driven vs. intuitive
- Autocratic vs. collaborative

Decision approaches may inform and contribute to a decision at a high level, or guide the use of certain [Decision Elements](#decision-element). If a particular decision approach is important for a decision, it should be documented in a [Decision Artifact](#decision-artifact).

## Decision Approach Register
A record linking documentation about [Decision Approaches](#decision-approach) with their associated [CDD](#causal-decision-diagram-cdd)(s).

## Decision Artifact
Any important piece of documentation for a decision.
 
Examples include:
- [CDD](#causal-decision-diagram-cdd)(s) created for the decision
- Documentation about the [Decision Approach](#decision-approach)
- Other [Decision Documents](#decision-document)

## Decision Artifacts Repositories Register
A register listing all repositories used to store [Decision Artifacts](#decision-artifact), what artifacts belong in which repository, who curates each repository, and instructions for submitting artifacts to the repository.

## Decision Assessment
 In the Decision Assessment process, the [Decision Team](#decision-team) identifies concerns and decides how they may deal with the risk each concern creates (accept/mitigate/avoid).

Areas of concern may include uncertainty, provenance, bias for [Decision Elements](#decision-element). It is important to consider concerns that you know exist, as well as ones you can infer exist from your [CDD](#causal-decision-diagram-cdd).

## Decision Element
 A component of a [CDD](#causal-decision-diagram-cdd) or [CDM](#causal-decision-model-cdm).
 
The types of decison elements are as follows:
- [Lever](#lever)
- [External](#external)
- [Outcome](#outcome)
- [Goal](#goal)
- Constraint
- [Intermediate](#intermediate)
- [Dependency](#dependency)

## Decision Element Assessment Register
 A record of Decision Uncertainties for a [CDD](#causal-decision-diagram-cdd). 

## Decision Asset
An asset that can inform a [Decision](#decision).

Decision Assets may or may not exist before the decision making process has begun. Decision Assets can include data, information, and human knowledge, as well as statistical, machine learning, behavioral, cognitive, mathematical, and other models.

## Decision Asset Register
 A record of [Decision Assets](#decision-asset) for a [CDD](#causal-decision-diagram-cdd). 

## Decision Customer
 The person responsible for setting up the boundaries and goals for decision making. The [Decision Team](#decision-team) answers to the Decision Customer, who may or may not be on the team itself.
 
 Note:  
 The [Decision Maker](#decision-maker) and the Decision Customer may or may not be the same. The Decision Customer requests the decision. They may or may not delegate making the decision to the Decision Team, The Decision Team Leader, or someone else, or they may retain decision making and use the Decision Team as advisors.  

Because the Decision Customer does not interact with OpenDI software in ways that are different than any other role, their role is not formally described in this document.

## Decision Document
Any documents that captures the rationale for the decision and the work done by the [Decision Team](#decision-team).

## Decision Frame
 Constraints, boundaries, and/or requirements for the decision that come from outside of the [Decision Team](#decision-team).

## Decision Maker
 The person who actually makes the decision, that is the person who at some point takes an irrevocable Action (or Actions) that begin a cause-and-effect chain that are intended to eventually lead to Outcome(s).

This role is described in [Roles and User Stories](https://opendi-org.github.io/roles-user-stories#decision-maker).
 
 Note:  
 The Decision Maker and the [Decision Customer](#decision-customer) may or may not be the same. The Decision Customer requests the decision. They may or may not delegate making the decision to separate Decision Makers, or they may retain decision making and use the Decision Team as advisors.

## Decision Making
 The process of utilizing the [CDD](#causal-decision-diagram-cdd) to put in place everything the [Decision Maker(s)](#decision-maker) need to make the decision and take [Action](#action).
 
 This includes adding existing [Decision Assets](#decision-asset) to the CDD, understanding uncertainties and constraints, modeling decision behavior, and determining the [Approaches](#decision-approach) the Decision Maker will use to make the decision. 

## Decision Modeling
 The process of creating a [CDD](#causal-decision-diagram-cdd) that models the decision, showing the chains of dependencies that lead from actions to outcomes and allowing [Decision Maker(s)](#decision-maker) to align about the decision rationale. 

## Decision Model
 A computational rendering of a [Causal Decision Diagram (CDD)](#causal-decision-diagram-cdd).

## Decision Simulation
 Understanding the dynamics of the decision model and identifying patterns of decision behavior like feedback loops and unintended consequences and understand the sensitivity of the decision to various decision elements.

## Decision Simulation Scenario Record
 A form recording the information and insights gained by simulating a Scenario.

## Decision Monitoring
 The act of observing and/or measuring attributes of [Levers](#lever), [Intermediates](#intermediate), and other [Decision Elements](#decision-element) as a decision unfolds over time. 

This is performed by the Decision Monitor, described in [Roles and User Stories](https://opendi-org.github.io/roles-user-stories#decision-monitor).

## Decision Objective Statement
 The high-level statement of the purpose (objective) of the decision, provided by the [Decision Customer](#decision-customer).
 
For example, "Determine if offering an Unlimited Usage plan would be a good idea".  
Objective statements are usually vague and may need further clarification before a [Decision Model](#decision-model) can be created.

## Decision Optimization
 Use of software automation to apply Decision Simulation to a large number of [Scenarios](#scenario) in order to determine the [Lever](#lever) values that produce the best [Outcomes](#outcome) for a given set of [External](#external) assumptions or for several sets of External assumptions.

## Decision Retrospective
 Assessment of the decision process quality and recommending process improvements as needed.

## Decision Retrospective Record
 A record of Decision Retrospective work. 

## Decision Sub-Model
 A model showing actions to outcomes that appears as part of a (or another) decision model.
 
 A Decision Sub-Model may be any existing [Decision Asset](#decision-asset) that shows cause and effect. It need not necessarily be expressed as a [CDD](#causal-decision-diagram-cdd).

## Decision Team
 A team of persons (or a single person) responsible for implementing one or more steps of the Decision Intelligence process.
 
 Possible roles for members of the Decision Team are described in [Roles and User Stories](https://opendi-org.github.io/roles-user-stories#user-roles).
## Dependency
 A [Decision Element](#decision-element) representing a "causal-like" link that shows how upstream factors influence downstream factors.

Dependencies form the arrows in a [CDD](#causal-decision-diagram-cdd). Dependencies can be annotated to show direction of influence or more complex relationships between the Decision Elements they connect. 

## Dependency Model
 A [Decision Asset](#decision-asset) that is attached to a [Dependency](#dependency) to model characteristics of that dependency.
 
 Such characteristics may include directionality and magnitude. Examples of dependency models include machine learning models, mathematical and economic models, and human behavioral models. 

## Divergent Thinking
 Creative thinking that leads to innovation. Brainstorming is an example of divergent thinking.

Compare to [Convergent Thinking](#convergent-thinking).

## Elicitation
 Leading a team through the process of creating a [CDD](#causal-decision-diagram-cdd).

This team may include, but is not limited to, members of the [Decision Team](#decision-team).

## External
 A [Decision Element](#decision-element) representing something that the [Decision Maker(s)](#decision-maker) cannot control, which nevertheless influences [Intermediates](#intermediate) and [Outcomes](#outcome).

 Similar to [Levers](#lever), the effect of [Externals](#external) can be variable. While some externals represent binary occurrences (things that either happen or don't happen), some represent things that may occur to a greater or lesser degree. Within a [CDM](#causal-decision-model-cdm), Externals can be modeled as sliders, enabling Decision Makers to model different possible intensities or configurations of Externals.

Examples of Externals include weather, customer behavior, competitor behavior, vendor pricing, the macro economy, etc.

## Element
 See [__Decision Element__](#decision-element).

## Feedback Loop
 A portion of a [CDD](#causal-decision-diagram-cdd) where a [Causal Chain](#causal-chain) starting at a given [Decision Element](#decision-element) loops back to become a cause of that same Decision Element.

## Forward Simulation
 The process of determining [Outcomes](#outcome) from specific values of [Levers](#lever) and [Externals](#external).

This typically uses a [Causal Decision Model](#causal-decision-model-cdm).

## Foundation Decision Model
 A model that can be copied, used, tailored &mdash; either in whole or in part &mdash; by others.  Some have started calling Foundation decision models "Large World Models" (LWMs), so this language here might change if the consensus shifts.

## Foundation decision model repository (FDMR)
 A computer-based resource that stores [Foundation Decision Models](#foundation-decision-model).  A FDMR may be public or private, and it may be cloud-based on local.

## Goal
 A [Decision Element](#decision-element) which tests an [Outcome](#outcome), often to measure success.

More generally, a Goal partitions an Outcome into a binary {true, false}.

For example, if a Decision has an Outcome of "return on invested capital, measured as the percentage (net profit on \[new product] / net of capital investment), after 18 months", then an associated Goal might be "2%".

## Ground Truth
 Fundamental or observed truth used to calibrate a system. Often, these systems are [Decision Assets](#decision-asset).
 
 For example, a remote sensor reading against a measurement on-site, "on the ground" or machine learning input data against  known labels.

## Hierarchical Decision Model
 A [CDD](#causal-decision-diagram-cdd) that incorporates [Decision Sub-Models](#decision-sub-model).
 
 A Hierarchical Decision Model is a linked-up decision system, which doesn't narrowly optimize for one thing while creating unintended negative consequences on other things.

## "How" Chain
An upstream [Causal Chain](#causal-chain) from an [Outcome](#outcome), [Intermediate](#intermediate), or proxy for a [Lever](#lever) to find real Lever(s) that the Decision Maker(s) have authority over.
 
 For example, a team might suggest that to "lower the cost of parts" they should "improve relationships with our vendors." "Improve relationships with our vendors" is not a Lever; it is not an action the Team or Decision Customer can take. If you ask, "how can we improve relationships with our vendors?" someone might suggest "talk with them" and if you ask "how?" again you might eventually arrive at "schedule the VP of Production to meet every month with an executive from each of our key vendors." 

See also: ["Why" Chain](#why-chain)

## Intermediate
 A [Decision Element](#decision-element) that forms the links in [Causal Chains](#causal-chain) that connect [Levers](#lever) to [Outcomes](#outcome).
 
Intermediates answer the question of why or how a [Decision Maker](#decision-maker) makes a [Choice](#choice), which leads to an [Action](#action), resulting in an [Outcome](#outcome).

Note that Intermediates often correspond the Key Process Indicators (KPIs) used by many organizations. DI adds a causal connection structure and integration with technology like AI and data to KPIs, which provides considerable advantages.  
Intermediates can also be thought of as leading indicators, measurements you can track to provide "early warning". For instance, you might detect a problem with the outcomes of a program that has received $1M budget spend when you have only spent the first $100K: it gives you a formal method for detecting problems early and for supporting a new plan.

## Iterative Refinement
 The process by which a [CDD](#causal-decision-diagram-cdd) develops in a stepwise manner over time.
 
 CDDs typically begin as a simple diagram with a limited number of [Decision Elements](#decision-element), to which more elements, additional details, and connections to other [Decision Assets](#decision-asset) are gradually added as needed to support decision making. 

## Lever
A [Decision Element](#decision-element) that encapsulates a [Choice](#choice) or set of choices that could be made to achieve an [Outcome](#outcome).

Levers always represent [Actions](#action) that the [Decision Maker](#decision-maker)(s) have the ability and authority to take. While some Levers represent binary options (something a decision maker will either do or not do), and some represent a fixed set of Choices, others represent things that the decision maker can do to a greater or lesser degree. These Levers can be thought of as sliders, representing a range of choices.

For example, "amount to invest in marketing" is a Lever.  
Compare this to the examples given for Choice and Action.
## OpenDI-Compliant
 Software that is, in some sense to be crystallized at a later date, consistent with the standard described by OpenDI, including this document.

## Outcome
 A [Decision Element](#decision-element) that represents an expected result of the decision being modeled.

Well-defined Outcomes are measurable.  
For example, an Outcome could be "return on invested capital, measured as the percentage (net profit on \[new product] / net of capital investment), after 18 months".

A test on an Outcome is a [Goal](#goal).
 
## Proxy Outcome or Proxy Goal
 Something that may be easier to measure or manage, but which is not a true outcome/goal.

For example, much of the world treats money as a proxy for happiness.

## Root Cause Analysis / Credit Assignment
 The process of using a decision model to work "backwards" / "upstream" in a causal chain from effects to causes.

See ["How" Chain](#how-chain).

## Scenario
 A scenario is a set of [Choices](#choice) for the [Levers](#lever) in a decision, which we may examine in a [CDD](#causal-decision-diagram-cdd) or simulate in a [Causal Decision Model](#causal-decision-model-cdm) to see the result.

## Sensitivity Analysis
 An analysis usually done as part of [Decision Simulation](#decision-simulation) that determines which [Levers](#lever), [Externals](#external), [Intermediates](#intermediate), and [Causal Chains](#causal-chain) have the greatest impact on [Outcomes](#outcome).

## Sketch Graph
 A curve that can be sketched as a hand-drawn graph, used to annotate a [Dependency](#dependency). Sketch graphs capture human knowledge about cause and effect.

## Technology Service
 A Decision Asset implemented as a software service.

## Vicious Cycle
 A [Feedback Loop](#feedback-loop) that reinforces undesirable effects.

## Virtuous Cycle
 A [Feedback Loop](#feedback-loop) that reinforces desirable effects.

## "Why" Chain
A downstream [Causal Chain](#causal-chain) from a [Lever](#lever), [Intermediate](#intermediate), [External](#external), or [Proxy Outcome](#proxy-outcome-or-proxy-goal) to find real Outcomes that better capture the effects of a [Decision](#decision).
 
 Asking, "why," is also a way to [Elicit](#elicitation) new [Decision Elements](#decision-element) to the right-hand-side of an existing Element. "Why" chains are downstream Causal Chains from Intermediates and Proxy Outcomes to real Outcomes. 

See also: ["How Chain"](#how-chain)
