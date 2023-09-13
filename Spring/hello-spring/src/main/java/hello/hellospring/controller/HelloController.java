package hello.hellospring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloController {

    @GetMapping("hello") // Get 방식으로 hello에 매칭이 됨
    public String hello(Model model) { // hello라는 모델을 선언함
        model.addAttribute("data", "hello!!"); // 모델에 적용시킬 data 변수 와 내용을 key value로 적용
        return "hello";
    }

    @GetMapping("hello-mvc")
    public String helloMvc(@RequestParam(value = "name", required = false) String name, Model model) {
        model.addAttribute("name", name);
        return "hello-template";
    }

    @GetMapping("hello-string")
    @ResponseBody
    public String helloString(@RequestParam("name") String name){
        return "hello" + name; // hello 문자열 자체를 그대로 반환함 html이 아니라 데이터 값만 반환
    }

    @GetMapping("hello-api")
    @ResponseBody
    public Hello helloApi(@RequestParam("name") String name){
        Hello hello = new Hello(); // 이렇게 하나의 객체를 선언
        hello.setName(name);
        return hello;
    }

    static class Hello {
        private String name; // private는 클래스 안에서만 사용 가능

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }
    }
}
