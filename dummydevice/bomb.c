#include <stdio.h>
#include <unistd.h>
#include <string.h>

void startAgain() {
    printf("\nIncorrect Password Entered.\n");
    printf("- DATA DELETION IN -\n");
    sleep(1);
    printf("3...\n");
    sleep(2);
    printf("2...\n");
    sleep(2);
    printf("1...\n");
    sleep(2);

    printf("Game Over...\n");

    printf("You may start again from the beginning\n");
    printf("Shifting details...\n");

    // Kill the process here and make players start from beginning of ctf
}

void reroutePlayer() {
    printf("\n...\n");
    sleep(2);
    printf("...\n");
    sleep(2);
    printf("well...\n");
    sleep(3);

    printf("It looks like you've 'diffused' this successfully.\n");
    sleep(3);
    printf("It's a shame really...\n");
    sleep(2);
    printf("I hate to break it to you, but this isn't the real bomb.\n");
    sleep(3);
    printf("Sending you on this goose chase provided me with great information about you and your 'team'.\n");
    sleep(3);
    printf("It's a shame really, I was thinking about postponing the deletion..\n");
    sleep(3);
    printf("but I think I'll do it anyway.\n");
    sleep(3);
    printf("Stop me - if you can.");
    sleep(2);
    printf("\n\nConnection closed by peer: 192.168.1.{insert ip}.\n-RECORDING STOPPED-\n");
}

int main() {

    printf("\n");

    printf(":::::::::   ::::::::  ::::    ::::  :::::::::       ::::::::\n");
    printf(":+:    :+: :+:    :+: +:+:+: :+:+:+ :+:    :+:     :+:    :+:\n");
    printf("+:+    +:+ +:+    +:+ +:+ +:+:+ +:+ +:+    +:+     +:+      \n");
    printf("+#++:++#+  +#+    +:+ +#+  +:+  +#+ +#++:++#+      +#+      \n");
    printf("+#+    +#+ +#+    +#+ +#+       +#+ +#+    +#+     +#+      \n");
    printf("#+#    #+# #+#    #+# #+#       #+# #+#    #+# #+# #+#    #+#\n");
    printf("#########   ########  ###       ### #########  ###  ########\n");

    printf("\n\n");

    sleep(6);

    printf("Hello defender, it looks like you have found me.\n");
    sleep(4);
    printf("What you are looking at right now (this file) is the bomb responsible for mass data deletion.\n");

    char name[101] = "The tears of a clown make my lipstick run, but my shower cap is still intact.\n";

    sleep(4);
    printf("If you fail to defuse this, you will be held responsible for everyone's data loss.\n");
    sleep(4);
    printf("Enter the correct diffuse instruction, and you win - easy right?\n");

    printf("Enter the password, at your own risk: ");

    char answer[101];
    fgets(answer, 100, stdin);
    
    if (!strcmp(name, answer)) {
        reroutePlayer();
    } else {
        startAgain();
    }

    return 0;
}
