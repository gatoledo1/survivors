import styles from "./styles.module.scss";
//import Link from "next/link";
//import Image from "next/image";
import { useState } from "react";
import { Infect } from "../../graphql";
import { initializeApollo } from "../../apollo/client";

interface ItemsCard {
  idItem: string;
  name: string;
  attribute: string;
  email: string;
  infectado: boolean;
}

export const Card = ({ idItem, name, attribute, email, infectado, }: ItemsCard) => {

  const human = [
    "/human-1.png",
    "/human-2.png",
    "/human-3.png",
    "/human-4.png",
    "/human-5.png",
    "/human-6.png",
  ];

  const zumbies = [
    "/zumbie-1.png",
    "/zumbie-2.png",
    "/zumbie-3.png",
    "/zumbie-4.png",
    "/zumbie-5.png",
    "/zumbie-6.png",
  ];

  //State to be used in status exchanges
  const [stateInfectado, setStateInfectado] = useState<boolean>(infectado);

  const randomImage = Math.floor(Math.random() * 6);

  //Function that triggers Apollo connection to the GraphQL server
  /*
  *  idItem is the id of the object in GraphQL sent in this component iteration
  */
  const InfectGuy = async (idItem: string) => {
    const apolloClient = initializeApollo();

    const querySurvivors = await apolloClient.mutate({
      mutation: Infect,
      variables: { id: idItem, attr: true },
    });

    //const infected = querySurvivors.data?.Infected;
    setStateInfectado((oldState) => (oldState = true));
  };


  //Function that triggers Apollo connection to the GraphQL server
  const DesinfectGuy = async (idItem: string) => {
    const apolloClient = initializeApollo();

    const querySurvivors = await apolloClient.mutate({
      mutation: Infect,
      variables: { id: idItem, attr: false },
    });

    //const desinfected = querySurvivors.data?.Infected;
    setStateInfectado((oldState) => (oldState = false));
  };

  return (
    <div
      className={[styles.cardItem, styles.animated, styles.fadeInUp].join(" ")}
    >
      <div
        className={styles.colorBackImg}
        style={{
          fontWeight: "bold",
          backgroundColor: stateInfectado ? "#ffeeee" : "#eefff3",
        }}
      ></div>
      <img
        src={stateInfectado ? zumbies[randomImage] : human[randomImage]}
        className={styles.imgCard}
      />
      <h2 className={styles.title}>{name}</h2>
      <details className={styles.details}>
        <summary>Detalhes</summary>
        <p className={styles.textBody}>ID: {idItem}</p>
        <p className={styles.textBody}>{attribute}</p>
        <p className={styles.textBody}>{email}</p>
        <p
          className={styles.textBody}
          style={{
            fontWeight: "bold",
            color: stateInfectado ? "#d30909" : "#02af61",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          Status: {stateInfectado ? "infectado" : "Saudável"}
        </p>
      </details>
      <div className={styles.cardFooter}>
        <a
          className={[styles.btnCard, styles.btnLeft].join(" ")}
          style={{ background: "#ffdfdf", color: "#d30909" }}
          onClick={() => {
            InfectGuy(idItem);
          }}
        >
          Infectar
        </a>

        <a
          className={[styles.btnCard, styles.btnRight].join(" ")}
          style={{ background: "#d7ffed", color: "#02af61" }}
          onClick={() => {
            DesinfectGuy(idItem);
          }}
        >
          Desinfectar
        </a>
      </div>
    </div>
  );
};
