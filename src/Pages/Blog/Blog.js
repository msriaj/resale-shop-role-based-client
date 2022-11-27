import React from "react";
import { Page } from "../../Components/Page";

const Blog = () => {
  return (
    <Page title="Blogs">
      <section className="bg-blue-50 py-12">
        <div className=" md:w-8/12 bg-white rounded-md shadow flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold mb-5  sm:text-4xl text-center">
            Blogs
          </h2>

          <div className="space-y-4 pt-5 font-semibold">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                Difference between SQL and NoSQL
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4   ">
                SQL is the programming language used to interface with
                relational databases. (Relational databases model data as
                records in rows and tables with logical links between them).
                NoSQL is a class of DBMs that are non-relational and generally
                do not use SQL.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                How does prototypical inheritance work?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-500   ">
                The Prototypal Inheritance is a feature in javascript used to
                add methods and properties in objects. It is a method by which
                an object can inherit the properties and methods of another
                object. Traditionally, in order to get and set the [[Prototype]]
                of an object, we use Object. getPrototypeOf and Object.
              </p>
            </details>

            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                What is a unit test? Why should we write unit tests?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4   ">
                The main objective of unit testing is to isolate written code to
                test and determine if it works as intended. Unit testing is an
                important step in the development process, because if done
                correctly, it can help detect early flaws in code which may be
                more difficult to find in later testing stages.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                React vs. Angular vs. Vue?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4   ">
                Vue provides higher customizability and hence is easier to learn
                than Angular or React. Further, Vue has an overlap with Angular
                and React with respect to their functionality like the use of
                components. Hence, the transition to Vue from either of the two
                is an easy option.
              </p>
            </details>
          </div>
        </div>
      </section>
    </Page>
  );
};

export default Blog;
