package org.example.customer;

import org.example.customer.Cook;
import org.example.customer.MenuItem;

public class Cooking {
    public Cook makeCook(MenuItem meniItem) {
        Cook cook = new Cook(meniItem); // 메뉴를 가져옴
        return cook; // 메뉴의 요리를 반환
    }
}
