import React from "react";

import { HighlightCard } from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";

import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  Icon,
  HighlightsCard,
  Transactions,
  Title,
  TransactionList,
} from "./styles";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: "1",
      type: "positive",
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      category: { name: "Vendas", icon: "dollar-sign" },
      date: "02/09/2021",
    },
    {
      id: "2",
      type: "negative",
      title: "Ézio",
      amount: "R$ 59,00",
      category: { name: "Alimentação", icon: "coffee" },
      date: "01/09/2021",
    },
    {
      id: "3",
      type: "negative",
      title: "Aluguel",
      amount: "R$ 550,00",
      category: { name: "Casa", icon: "home" },
      date: "10/09/2021",
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: "https://github.com/lguilherme44.png" }} />

            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Guilherme Lellis</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightsCard>
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </HighlightsCard>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
