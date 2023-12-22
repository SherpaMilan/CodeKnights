# CodeKnights | CHALLENGE 2 Openmesh
***

###### Technical Requirements

* *Develop a solution for anyone to verify that an endpoint gave a certain response.*
* *The solution is allowed to use multiple machines/nodes, however, it should take into consideration that some of these might act faulty.*
* *A single proof should be able to prove the received information to anyone. In case a proof per user is required, this proof should be fast to generate.*
* *The solution should be able to prove data of megabytes/gigabytes in size.*
* *The solution should be able to say something about when the data was received.* * *This can either be relative (before or after some other data) or absolute (around a certain timestamp).*
* *There should be no modification needed on the data provider side.*
* *Adherence to robust security practices is mandatory.*


###### Evaluation Metrics

> ***Functionality***: How many different kinds of data sources can be proven with the solution? 

> ***Applicability***: How relevant and useful is the solution across various applications?

>***Innovation***: Is the solution similar to existing algorithms or is it a completely new idea?

>***Scalability***: Can the solution efficiently handle high-speed or large data amounts? Can the solution efficiently prove this to a large number of users?

>***Security***: How well does the solution adhere to best practices for security in its design and implementation? How robust is the solution to bad actors?

>***Decentralization***: How decentralized is the solution?

****

#### Brainstorming the Algorithm Solution

We want to be able to handle different types of data sources such as:

- Web APIs
- Social Media 
- Financial Data

There are more data sources out there, but as a start given the limited time frame, we should cater to ***at least two*** of these sources. 

It needs to be decentralised and can handle both variety and large amounts of data. 

****

#### Day 1 | 18th Dec

Started research on how to cater for the metrics in our solution. To satisfy the decentrialised nature of the solution, we opted for a Proof-of-Work consensus blockchain mechanism to validify data from certain datapoints. 

This required us to create classes to cater for this architecture so Datablock, Blockchain and Node was a start. 

> ***Datablock*** would be responsible for containing the data and calculating the neccessary attributes to ensure validity and freshness of the data, such as the hash, encrypted value, and nonce values.
>

> ***Blockchain*** would be responsible for managing the storage of these datablocks, and for mining them according to our chosen mechanism. This is to ensure validity of the added blocks to the chain.
>

> ***Node*** would be responsible for acting for the network to conduct concurrent validations of the blockchain to ensure mutual agreement across all nodes.
>

#### Day 2 | 19th of Dec
In attempts to innovate the consensus based verification, we delegated research towards various consensus mechanisms such as Proof-of-Work or Proof-of-Stake.

