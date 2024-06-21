"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Typewriter } from "react-simple-typewriter";

const EnhancingRecommenderSystem = () => {
  const router = useRouter();
  return (
    <div className="article-container p-4 sm:p-6 rounded-lg shadow-lg max-w-4xl mx-auto text-justify">
      <button
        onClick={() => router.back()}
        className="text-blue-500 hover:text-blue-700 mb-4"
      >
        ← Back
      </button>
      <p className="mb-6 font-semibold text-center text-sm">
        Published - 23 April 2024
      </p>{" "}
      <h1 className="text-3xl font-bold mb-6 text-center">
        <Typewriter
          words={[
            "Enhancing Recommender Systems through Knowledge Graphs: Approaches,Comparisons, and Future Directions (Survey)",
          ]}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <h2 className="mb-2 text-xl font-semibold"> Abstract</h2>
      <p className="mb-6">
        Recommender systems are critical in filtering vast amount of
        information, helping users in discovering the most relevant items. The
        integration of Knowledge Graphs (KG) into recommender systems offers a
        well defined method for enhancing the recommendation performance using
        semantic relationships between entities. This survey investigates
        different KG based methodologies that have recently proposed to improve
        recommender systems. We review several models, including the
        Knowledge-aware Path Recurrent Network (KPRN), which utilizes path-based
        reasoning to enhance the interpretability and accuracy of
        recommendations, and the Policy-Guided Path Reasoning (PGPR), which
        employs reinforcement learning to generate explainable recommendations
        via knowledge graphs. Additionally, the Collaborative Knowledge Base
        Embedding (CKE) model integrates heterogeneous information from KG to
        refine recommendation quality further. We conclude by suggesting future
        research directions focusing on overcoming existing challenges.
      </p>
      <h2 className="mb-2 text-xl font-semibold"> Introduction</h2>
      <p className="mb-6">
        Recommender systems are extremely important in personalizing user
        experience in various areas ranging from e-commerce to entertainment.
        However, traditional recommendation systems face challenges related to
        data availability, scalability, resulting in a struggle to provide
        accurate sugesstions in dynamic environment.
      </p>
      <p className="mb-6">
        One of the transformative solutons to these challenges are knowledge
        graphs. By embedding deep semantic relationships within knowledge graphs
        structures, they provide rich context that can be used in the
        recommendation process. Recent advancements and research has in
        Knowledge graphs has improved the recommendation systems. These
        advancements have introduced new methodologies that leverages these
        semantic interconnections for imporved recommendation quality.
      </p>
      <Image
        src="/article3.1.png"
        alt="Recommender System"
        width={500}
        height={600}
        className="mb-4 rounded-lg mx-auto"
      />
      <div className="text-sm text-gray-500 text-center mb-2">
        Image credits: [Towards Data Science]
      </div>
      <p className="mb-6">
        From the surveyed papers, We have found out various innovative
        approaches. For example, Knowledge-aware Path Recurrent Network (KPRN)
        provides a pathway-based reasoning mechanism which enhances the accuracy
        and the interpretability of recommendations. The Policy-Guided Path
        Reasoning (PGPR) model uses reinforcement learning to dynamically
        explore KGs for effective recommendation paths. Another example that we
        read was the Collaborative Knowledge Base Embedding (CKE) method, which
        integrates heterogeneous information to refine recommendation outputs.
      </p>
      <p className="mb-6">
        In this survey we aim to analyze these new technologies. We aim to
        analyze and assess the methodology given in the papers and identify
        useful points which could inspire future research. By providing an
        overview on the current approaches and doing comparisons among them, twe
        aim to highlight how Knowledge Graphs can address the limitations of
        traditional recommender systems and suggest directions for future
        innovations.
      </p>
      <h2 className="mb-2 text-xl font-semibold">Problem Description</h2>
      <p className="mb-6">
        Recommender systems are a foundational to all of the digital services
        nowadays. Despite of their importance these systems face various
        challenges that can hamper their effectiveness.
      </p>
      <h2 className="mb-2 text-xl font-semibold">
        1) Data Sparsity and Scalability:
      </h2>
      <p className="mb-6">
        Various traditional recommendation systems face challenges related to
        data sparsity - where the majority of the data items receive very few
        ratings or interactions. This leads to the lack of data which can lead
        to inaccurate predictions. This problem can become worse when the scale
        of the system increases. As the number of users and items grows in
        number, it makes it even more difficult to process data efficiently and
        provide timely recommendations.
      </p>
      <h2 className="mb-2 text-xl font-semibold">
        2) Limited Contextual Understanding:
      </h2>
      <p className="mb-6">
        Most used traditional recommender system algorithms such as
        collaborative filtering rely on user item interaction matrix. These
        methods generally tend to overlook the contextual information that can
        be important in understanding user preferences and item characteristics.
        This provides recommendations that lack user personal relevance and fail
        to capture user interests.
      </p>
      <h2 className="mb-2 text-xl font-semibold">
        3) Need for Transparency and Explainablity:
      </h2>
      <p className="mb-6">
        As the recommender system becomes more complex, the need for
        transparency and explainability increases. Both the users and the
        service providers benefit from understanding the reasons behind certain
        recommendations. This can enhance the level of trust and user
        satisfaction. Traditional systems often provide no insight into the
        decision making process.
      </p>
      <h2 className="mb-2 text-xl font-semibold">
        Review of Existing Approaches
      </h2>
      <p className="mb-6">
        Knowledge graphs have emerged as a very good solution to the problems
        mentioned above by including structured domain knowledge into the
        recommendation process. Knowledge graphs represents data (i.e users and
        items ) and the relationship between them in a graph like structure.
        This brings a more nuanced reasoning and understanding of the user-item
        interaction. The below points describe how the knowledge graphs address
        the above issues.
      </p>
      <h2 className="mb-2 text-xl font-semibold">
        1) Enriching Data Representation:
      </h2>
      <p className="mb-6">
        Knowledge Graphs reduce data sparsity by linking items to a wide array
        of attributes and related entities, enriching the information available
        for each item and user. This enriched data representation allows for
        strong predictions even with sparse user-item interactions.
      </p>
      <h2 className="mb-2 text-xl font-semibold">
        2) Contextual and Semantic Richness:
      </h2>
      <p className="mb-6">
        By making use of semantic relationships, the Knowledge Graphs allows
        recommender systems to understand the context surrounding user
        interactions and item attributes. This understanding allows for more
        relevant recommendations based on deeper content analysis and user
        preference profiling.
      </p>
      <h2 className="mb-2 text-xl font-semibold">
        3) Enhanced Transparency and Explainability:
      </h2>
      <p className="mb-6">
        The Knowledge Graphs facilitate explainable recommendation processes by
        tracing the paths between users and items through the graph. This
        technique allows systems to provide reasons for their recommendations,
        such as shared attributes or interests of the users. This enhances user
        trust and system transparency.
      </p>
      <h2 className="mb-2 text-xl font-semibold">Comparative Analysis</h2>
      <p className="mb-6">
        Integrating Knowledge Graphs with recommender systems represents a
        positive direction to address the problems and limitations of
        traditional recommender system models. Each of the surveyed paper
        proposes different technical methodologies that makes use of the
        semantic richness of Knowledge Graphs for enhancing recommender system
        quality. In this section we will examine these methodologies based on
        how they handle data sparsity, improve contextual understanding, and
        enhance explainability.
      </p>
      <h2 className="mb-2 text-xl font-semibold">
        Knowledge-aware Path Recurrent Network (KPRN)
      </h2>
      <p className="mb-6">
        KPRN models the path within knowledge graphs to generate path based
        feature representation that shows the semantic relationship between the
        users and items. It uses a sequence model (eg. LSTM - Long short term
        memory) to capture the semantics of both the entities and relations
        along the path of the graph. Each path is considered as a sequence of
        entities and relation. KPRN composes features from both the entities and
        the relation to form a path representation. This includes the types of
        relations and characteristics of entities. The model then uses the
        learned path to infer user-item interactions. It integrates the outputs
        of LSTM through a pooling layer that aggregates the features from
        different paths and predicts the final recommendation.
      </p>
      <h2 className="mb-2 text-xl font-semibold">
        Policy-Guided Path Reasoning (PGPR)
      </h2>
      <p className="mb-6">
        Here PGPR uses a Reinforcement learning model, where an agent learns to
        navigate the Knowledge Graph to select the path that will likely would
        lead us to the correct recommendation. This approach uses a policy
        network to decide the next step in the path based on the current state
        of the graph. The state in the PGPR includes the current node in the
        graph and the target item and the path traversed so far. PGPR
        dynamically selectes the path during the recommendation process. This
        allows for effeciently finding the most informative path based on user
        interaction history and item characteristics.
      </p>
      <h2 className="mb-2 text-xl font-semibold">
        Collaborative Knowledge Base Embedding (CKE)
      </h2>
      <p className="mb-6">
        CKE integrates multiple types of information which includes structural
        knowledge from the knowledge graph, visual information from the image of
        the item and textual description associated with that item. Then it
        combines these different modalities into single embedded space where
        each item's representation is influenced by its relationships in the KG
        as well as its visual and textual features. For visual data it uses
        Convolutional Neural Networks to extract feature vectors. To improve the
        generalization of the embeddings and to prevent overfitting, CKE applies
        regularization techniques to maintain the robustness of the model across
        the data.
      </p>
      <h2 className="mb-2 text-xl font-semibold">
        Limitations and New Research Directions
      </h2>
      <p className="mb-6">
        In KPRN, the complexity of path processsing can lead to higher
        computation capacity, especially as the size of the knowledge graph
        grows. PGPR is dependent on Reinforcement Learning model for its
        working. This requires careful tuning of the model and can be sensitive
        to initial settings. This might lead into variable performance. CKE
        model is very comprehensive, but it uses multiple data types. This can
        increase model complexity, which further can lead to challenges in model
        optimizations and increased training times.
      </p>
      <h2 className="mb-2 text-xl font-semibold">New Research Directions</h2>
      <p className="mb-6">
        1) Though we saw that the KPRN and PGPR use paths within the Knowledge
        Graphs effectively, the nature of path selection is static. These models
        also rely on some traditional sequential models like LSTM, which can be
        limiting. Incorporating Graph Neural Networks (GNNs) to dynamically
        learn and optimize path selection and representation directly from graph
        structures can be usefull according to us. GNNs can capture more complex
        and relationships that are non linear in nature with the graph network.
        This might help imporve both the accuracy and scalability of
        recommendation systems.
      </p>
      <p className="mb-6">
        2) We also saw that, PGPR uses basic reinforcement learning for path
        selection. We can explore more to integrate more sophisticated
        techniques like deep reinforcement learning or multi-agent reinforcement
        learning. The techniques are advanced and can better handle the dynamics
        of knowledge graphs. Using these advanced techniques can improve both
        the effeciency of path selection as well as the recommendation quality.
      </p>
      <p className="mb-6">
        3) Further improvements can be made to KPRN by combining KPRN with other
        recommendation techniques such as collaborative filtering or matrix
        factorization. This hybrid model could leverage the strength of multiple
        approaches and thus can result into a better recommendations. To make
        KPRN more applicable to real life large scale datasets where both size
        of the data and real time requirements are challenging, we can explore
        techniques like graph partitioning, model pruning and parallel
        processing to optimize KPRN architecture.
      </p>
      <p className="mb-6">
        4) The current CKE model uses multiple data modalities such as
        structural information from knowledge graphs, visual information from
        images of items and textual description information. New research
        direction would be to integrate additional modalities like audio
        features, video content and also human generated contents like reviews
        or social media posts. This can be done by developing deep learning
        architectures that are capable of handling multi dimensional datatype in
        a unified manner. Implementing attention mechanisms to calculate the
        dynamic weight of different modalities depending on the context of the
        recommendation can also improve the quality of recommendation. For
        example, in movie recommendation, visual cues can be prioritizes also in
        music recommendation audio analysis of audio features can be helpful in
        improving the quality of recommendations.
      </p>
      <h2 className="mb-2 text-xl font-semibold">Conclusion</h2>
      <p className="mb-6">
        In this survey we have done a comprehensive overview of how knowledge
        graphs can enhance the recommender systems. We explored three
        methedologies, the Knowledge-aware Path Recurrent Network (KPRN),
        Policy-Guided Path Reasoning (PGPR), and Collaborative Knowledge Base
        Embedding (CKE). Each offers unique mechanism to use the rich semantic
        relationships into the recommendation process. With comparative analysis
        we found out that, while each model has its own strengths, they also
        face challenges in computational effeciency, scalabilty and integration
        of diverse data sources. This study revealed significant opportunity for
        future research to further refine the recommendation process. In
        conclusion, the integration of Knowledge Graphs into recommender systems
        represents a vital area of research with great potential to transform
        how recommendations are made across various sectors. As this field
        evolves, it will continue to offer opportunities for innovation that
        could lead to more responsive, and user-centric recommender systems.
      </p>
    </div>
  );
};

export default EnhancingRecommenderSystem;
