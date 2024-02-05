package org.example.customer;

public class MeniItem {
    private final String name;
    private final int price;

    public MeniItem(String name, int price) {
        this.name = name;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public int getPrice() {
        return price;
    }
}
